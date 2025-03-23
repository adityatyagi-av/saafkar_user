import axios from 'axios';

import { UserRefreshToken } from './ApiEndPoints/ApiEndPoints';
import { Alert } from 'react-native';
import { BASE_URL } from '../src/ApiBaseUrl/ApiBaseUrl';
import { clearTokens, getTokens, storeTokens } from './tokenService';
import { navigationRef } from '../utils/RootNavigation';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async config => {
    const tokens = await getTokens();
    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response Interceptor
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

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (
      (status === 401 || status === 403) &&
      !originalRequest._retry &&
      message?.toLowerCase().includes('expired')
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const tokens = await getTokens();
        const refreshResponse = await axios.post(`${BASE_URL}${UserRefreshToken}`, {
          refreshToken: tokens?.refreshToken,
        });

        const { accessToken, refreshToken } = refreshResponse.data.data;
        await storeTokens({ accessToken, refreshToken });
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        await clearTokens();
        Alert.alert('Session Expired', 'Please login again.');
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
