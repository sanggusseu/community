import axios from 'axios';
import { TOKEN_STORAGE_KEY } from '../constants/storage';
import { BASE_API_URL } from '../constants/api';

export const handleApiError = (error, errorMap) => {
  const errorMessage =
    errorMap.get(error.response?.data) || '알 수 없는 에러가 발생했습니다.';
  console.error(errorMessage);
  alert(errorMessage);
};

export const setLocalToken = token => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getLocalToken = () => {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
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
