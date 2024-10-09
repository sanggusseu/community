import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import { getLocalToken, logoutUser, setLocalToken } from '../utils/api';
import { loginUser, registerUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const saveToken = (jwtToken) => {
    setToken(jwtToken);
    const {email, sub} = jwtDecode(jwtToken);
    setUser({email, userId: sub});
    setLocalToken(jwtToken);
  }

  useEffect(()=> {
    const storedToken = getLocalToken();
    if(storedToken) {
      saveToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    logoutUser();
  }

  const handleRegister = async (userData) => {
    try {
      const jwtToken = await registerUser(userData);
      if(jwtToken) saveToken(jwtToken);
    } catch (error) {
      console.error('회원가입 중 오류 발생', error);
    }
  }

  const handleLogin = async (userData) => {
    try {
      const jwtToken = await loginUser(userData);
      if(jwtToken) saveToken(jwtToken);
    } catch (error) {
      console.error('로그인 중 오류 발생', error);
    }
  }

  return (
    <AuthContext.Provider value={{token, user, saveToken, handleLogout, handleLogin, handleRegister}}>
      {children}
    </AuthContext.Provider>
  )
}