import { Link } from 'react-router-dom';

export default function AuthButtons({ user, handleLogout, toggleAuthModal }) {
  return (
    <>
      {user ? (
        <>
          <div>
            <Link
              to="/my-page"
              className="flex items-center p-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
              aria-label="마이페이지로 이동"
            >
              마이페이지
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex flex-grow items-center w-full p-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
              aria-label="로그아웃"
            >
              로그아웃
            </button>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="flex items-center w-full p-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
          onClick={toggleAuthModal}
        >
          로그인/회원가입
        </button>
      )}
    </>
  );
}
