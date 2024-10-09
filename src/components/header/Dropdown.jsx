import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Dropdown() {
  const {handleLogout} = useContext(AuthContext);

  return (
    <div className="absolute right-0 mt-2 w-48 dark:bg-dark bg-light rounded-md overflow-hidden shadow-xl z-10 top-full">
      <Link
        to="/mypage"
        className="flex items-center px-4 py-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
        aria-label="마이페이지로 이동"
      >
        마이페이지
      </Link>
      <button
        type="button"
        className="flex flex-grow items-center w-full px-4 py-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
        aria-label="로그아웃"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
}
