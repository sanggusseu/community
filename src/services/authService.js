import { apiClient, handleApiError } from '../utils/api';

const errorMap = new Map([
  ['Email already exists', '이미 가입된 이메일입니다.'],
  ['Incorrect password', '비밀번호가 일치하지 않습니다.'],
  ['Cannot find user', '가입된 이메일이 아닙니다.'],
]);

export const registerUser = async data => {
  try {
    const response = await apiClient.post('/users', data);
    return response.data.accessToken;
  } catch (err) {
    handleApiError(err, errorMap);
  }
};

export const loginUser = async data => {
  try {
    const response = await apiClient.post('/login', data);
    return response.data.accessToken;
  } catch (err) {
    handleApiError(err, errorMap);
  }
};
