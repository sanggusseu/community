import { apiClient, handleApiError, setToken } from '../utils/api';
import { getUserInfo } from './auth';

const errorMap = new Map([
  ['Email already exists', '이미 가입된 이메일입니다.'],
  ['Incorrect password', '비밀번호가 일치하지 않습니다.'],
  ['Cannot find user', '가입된 이메일이 아닙니다.'],
]);

export const registerUser = async data => {
  try {
    const response = await apiClient.post('/users', data);
    console.log('회원가입 및 로그인 성공');
    setToken(response.data.accessToken);
    console.log(getUserInfo());
  } catch (err) {
    handleApiError(err, errorMap);
  }
};

export const loginUser = async data => {
  try {
    const response = await apiClient.post('/login', data);
    console.log('로그인 성공');
    setToken(response.data.accessToken);
    console.log(getUserInfo());
  } catch (err) {
    handleApiError(err, errorMap);
  }
};
