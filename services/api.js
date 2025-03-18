// src/services/api.js

import axios from 'axios';
import { getTokens, storeTokens, clearTokens } from './tokenService';
import { BASE_URL } from '../src/ApiBaseUrl/ApiBaseUrl';


const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Request interceptor to add the access token
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

// Response interceptor to handle 401 & refresh the token
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/refresh-token')
    ) {
      originalRequest._retry = true;

      try {
        const tokens = await getTokens();
        if (!tokens?.refreshToken) throw new Error('Missing refresh token');

        const refreshResponse = await axios.post(`${BASE_URL}/auth/refresh-token`, {}, {
          headers: {
            Cookie: `refreshToken=${tokens.refreshToken}`,
          },
          withCredentials: true,
        });

        const newTokens = refreshResponse.data;
        await storeTokens(newTokens);

        // Retry the original request with new access token
        originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        await clearTokens();
        // Optional: dispatch logout action here
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
