import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../src/ApiBaseUrl/ApiBaseUrl';
import { clearTokens, getTokens, storeTokens } from './tokenService';
import { navigationRef } from '../utils/RootNavigation';
import { UPDATE_REFRESH_TOKEN } from '../src/ApiEndPoints/ApiEndPoints';
import store from '../store/store';
import { handleLogout } from '../store/Actions/authAction';

const api = axios.create({
  baseURL: BASE_URL,
});

// Track refresh state and failed requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

//  Attach access token to requests
api.interceptors.request.use(
  async config => {
    const tokens = await getTokens();
    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
      console.log('Request with access token:', tokens.accessToken.slice(0, 10)); // safe preview
    }
    return config;
  },
  error => Promise.reject(error)
);

//  Handle responses (esp. token expiration)
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const message = error.response?.data?.message;

    console.log(' Interceptor caught error:', status, message);
    console.log('isRefreshing:', isRefreshing);
    console.log(' originalRequest._retry:', originalRequest._retry);

    if (
      status === 401 &&
      message === 'TokenExpiredError' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          console.log('Retrying request after queue with new token...');
          return api(originalRequest);
        }).catch(err => {
          console.log(' Retried request failed:', err);
          return Promise.reject(err);
        });
      }

      isRefreshing = true;

      try {
        const tokens = await getTokens();
        console.log(' Refreshing with:', tokens?.refreshToken?.slice(0, 10));

        const refreshResponse = await axios.post(`${BASE_URL}${UPDATE_REFRESH_TOKEN}`, {
          refreshToken: tokens?.refreshToken,
        });

        const { accessToken, refreshToken } = refreshResponse.data.data;

        await storeTokens({ accessToken, refreshToken });
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        processQueue(null, accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        console.log(' Token refreshed, retrying original request...');
        return api(originalRequest);
      } catch (refreshError) {
        console.log(' Refresh token failed:', refreshError?.response?.data || refreshError.message);
        processQueue(refreshError, null);
        await clearTokens();
      
        Alert.alert('Session Expired', 'Please login again.');
        store.dispatch(handleLogout());
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    console.log('Final error passed to caller:', error.message);
    return Promise.reject(error);
  }
);

export default api;
