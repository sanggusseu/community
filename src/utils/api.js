import axios from 'axios';
import { BASE_API_URL } from '../constants/api';
import { getLocalToken } from './token';

export const handleApiError = (error, errorMap) => {
  const errorMessage =
    errorMap.get(error.response?.data) || '알 수 없는 에러가 발생했습니다.';
  console.error(errorMessage);
  throw new Error(error);
};

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authApiClient.interceptors.request.use(config => {
  const token = getLocalToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
