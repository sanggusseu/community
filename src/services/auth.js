import { jwtDecode } from 'jwt-decode';
import { getToken } from '../utils/api';

export const getUserInfo = () => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
