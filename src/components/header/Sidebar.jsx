import Separator from '../Separator';
import Dimmed from '../Dimmed';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
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
          {/* <Link to="mypage">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4OTg1OTk0Nw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="사용자 아바타"
              className="h-20 w-20 rounded-full object-cover"
            />
          </Link> */}
        </div>
        <div>
          <Separator />
          <nav>
            <ul className="flex flex-col w-full gap-1">
              <li className="w-full">
                <Link
                  className="flex flex-grow py-2 px-3 text-sm hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                  to="/other"
                >
                  둘러보기
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className="flex flex-grow py-2 px-3 text-sm hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                  to="/my"
                >
                  나의 소원
                </Link>
              </li>
            </ul>
          </nav>
          {/* <Separator />
          <div>
            <Link
              to="/mypage"
              className="flex items-center p-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
              aria-label="마이페이지로 이동"
            >
              마이페이지
            </Link>
            <button
              type="button"
              className="flex flex-grow items-center w-full p-2 text-sm dark:text-light dark:hover:text-dark dark:hover:bg-light text-dark hover:bg-dark transition duration-300 ease-in-out"
              aria-label="로그아웃"
            >
              로그아웃
            </button>
          </div> */}
        </div>
      </aside>
      <Dimmed isActive={isOpen} handleOnClick={toggleSidebar} />
    </>
  );
}
