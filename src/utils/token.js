import { TOKEN_STORAGE_KEY } from '../constants/storage';

export const setLocalToken = token => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getLocalToken = () => {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const removeLocalToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
