import axios from 'axios';

const BASEURL = 'http://localhost:8000/';
const TOKEN_KEY = 'token';

export const apiClient = axios.create({
  baseURL: BASEURL,
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
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const logoutUser = () => {
  setToken('');
};
