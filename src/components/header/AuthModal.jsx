import { useContext, useState } from 'react';
import { FaTimes, FaEnvelope, FaLock } from 'react-icons/fa';
import Dimmed from '../Dimmed';
import Button from '../Button';
import { AuthContext } from '../../context/AuthContext';

export default function AuthModal({ closeModal }) {
  const SIGNIN = '로그인';
  const SIGNUP = '회원가입';
  const initialFormData = { email: '', password: '' };
  const [form, setForm] = useState(initialFormData);
  const [isSignIn, setIsSignIn] = useState(true);
  const { handleLogin, handleRegister, user } = useContext(AuthContext);

  const handleFormData = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleType = () => {
    setIsSignIn(!isSignIn);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    if (isSignIn) {
      handleLogin({ ...form });
    } else {
      handleRegister({ ...form });
    }
    setForm(initialFormData);
  };

  if (user) {
    closeModal();
    return;
  }

  return (
    <>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark bg-opacity-50 flex items-center justify-center z-50 rounded-lg">
        <div className="dark:bg-dark dark:text-light bg-light text-dark p-8 rounded-lg shadow-xl max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{isSignIn ? SIGNIN : SIGNUP}</h2>
            <button
              onClick={closeModal}
              className="text-2xl focus:outline-none"
              aria-label="모달 닫기"
            >
              <FaTimes />
            </button>
          </div>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                이메일
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light dark:text-dark" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={form.email}
                  onChange={handleFormData}
                  className="w-full pl-10 pr-3 py-2 rounded-lg dark:bg-light dark:text-dark bg-dark text-light focus:outline-none focus:ring-2 focus:ring-light-500"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                비밀번호
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light dark:text-dark" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleFormData}
                  minLength="5"
                  className="w-full pl-10 pr-3 py-2 rounded-lg dark:bg-light dark:text-dark bg-dark text-light focus:outline-none focus:ring-2 focus:ring-light-500"
                  placeholder="********"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="text-opacity-85 text-dark dark:text-light mb-2"
              onClick={handleType}
            >
              {isSignIn ? SIGNUP : SIGNIN}
            </button>
            <Button type="submit" addStyle={'w-full'}>
              {isSignIn ? SIGNIN : SIGNUP}
            </Button>
          </form>
        </div>
      </div>
      <Dimmed isActive="true" handleOnClick={closeModal} />
    </>
  );
}
