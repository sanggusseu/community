import Separator from '../Separator';
import Dimmed from '../Dimmed';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AuthButtons from './AuthButtons';

export default function Sidebar({ isOpen, toggleSidebar, toggleAuthModal }) {
  const { user, handleLogout } = useContext(AuthContext);

  const handleOnClick = e => {
    if (e.target === e.currentTarget) return;
    toggleSidebar();
  };

  return (
    <>
      <aside
        onClick={handleOnClick}
        className={`flex flex-col fixed top-0 left-0 h-full w-64 p-4 lg:hidden bg-light text-dark dark:bg-dark dark:text-light transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col items-center mt-8 space-y-4">
          <h2 className="text-xl font-bold">
            <Link to="/">소원을 말해봐</Link>
          </h2>
          {user && <span>{user.email}</span>}
        </div>
        <div>
          <Separator />
          <nav>
            <ul className="flex flex-col w-full gap-1">
              <li className="w-full">
                <Link
                  className="flex flex-grow py-2 px-3 text-sm hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                  to="/"
                >
                  둘러보기
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className="flex flex-grow py-2 px-3 text-sm hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                  to="/my-wish"
                >
                  나의 소원
                </Link>
              </li>
            </ul>
          </nav>
          <Separator />
          <AuthButtons
            user={user}
            handleLogout={handleLogout}
            toggleAuthModal={toggleAuthModal}
          />
        </div>
      </aside>
      <Dimmed isActive={isOpen} handleOnClick={toggleSidebar} />
    </>
  );
}
