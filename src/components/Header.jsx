import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './header/Sidebar';
import Dropdown from './header/Dropdown';
import AvatarButton from './AvatarButton';
import { Link } from 'react-router-dom';
import Button from './Button';
import AuthModal from './header/AuthModal';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleAuthModal = val => {
    setIsAuthModalOpen(val);
  };

  return (
    <header className="dark:bg-dark dark:text-light bg-light text-dark p-4 shadow-lg transition-colors duration-300">
      <div className="header-container container relative mx-auto flex justify-between items-center">
        <h1 className="title absolute left-[50%] translate-x-[-50%] lg:static lg:translate-x-0 text-xl lg:text-2xl font-bold">
          <Link to="/">소원을 말해봐</Link>
        </h1>
        <button
          onClick={toggleSidebar}
          className="text-2xl focus:outline-none lg:hidden"
          aria-label="메뉴 열기"
        >
          <FaBars />
        </button>
        <div className="right-wrapper hidden lg:flex gap-4">
          <nav className="flex items-center space-x-6">
            <ul className="flex items-center gap-1">
              <li>
                <Link
                  className="py-2 px-3 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200 rounded-md"
                  to="/other"
                >
                  둘러보기
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200 rounded-md"
                  to="/my"
                >
                  나의 소원
                </Link>
              </li>
            </ul>
          </nav>
          {!user && (
            <Button handleOnClick={() => toggleAuthModal(true)}>
              로그인/회원가입
            </Button>
          )}
          {isAuthModalOpen && (
            <AuthModal closeModal={() => toggleAuthModal(false)} />
          )}
          {user && (
            <div className="flex items-center">
              <button type="button" onClick={toggleDropdown}>
                {user.email}
              </button>
              {isDropdownOpen && <Dropdown />}
            </div>
          )}
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  );
}
