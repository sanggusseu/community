import { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Dimmed from '../Dimmed';
import { AuthContext } from '../../context/AuthContext';
import Form from '../form/Form';
import InputField from '../form/InputField';

export default function AuthModal({ closeModal }) {
  const SIGNIN = '로그인';
  const SIGNUP = '회원가입';

  const [isSignIn, setIsSignIn] = useState(true);
  const { handleLogin, handleRegister, user } = useContext(AuthContext);

  const handleType = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = data => {
    if (isSignIn) {
      handleLogin(data);
    } else {
      handleRegister(data);
    }
  };

  if (user) {
    closeModal();
    return;
  }

  return (
    <>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark bg-opacity-50 flex items-center justify-center z-50 rounded-lg">
        <div className="dark:bg-dark dark:text-light bg-light text-dark p-8 rounded-lg shadow-xl min-w-max w-full">
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
          <Form
            handleSubmit={handleSubmit}
            submitBtn={`${isSignIn ? SIGNIN : SIGNUP}`}
          >
            <InputField label="이메일" id="email" name="email" />
            <InputField
              label="비밀번호"
              id="password"
              name="password"
              type="password"
            />
          </Form>
          <button
            type="button"
            className="text-opacity-85 text-dark dark:text-light mt-2"
            onClick={handleType}
          >
            {isSignIn ? SIGNUP : SIGNIN}
          </button>
        </div>
      </div>
      <Dimmed isActive="true" handleOnClick={closeModal} />
    </>
  );
}
