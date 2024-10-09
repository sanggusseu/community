import axios from 'axios';
import { TOKEN_STORAGE_KEY } from '../constants/storage';
import { BASE_API_URL } from '../constants/api';

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const handleApiError = (error, errorMap) => {
  const errorMessage =
    errorMap.get(error.response?.data) || '알 수 없는 에러가 발생했습니다.';
  console.error(errorMessage);
};

export const setToken = token => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logoutUser = () => {
  setToken('');
};
