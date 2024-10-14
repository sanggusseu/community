import { Link, useNavigate } from 'react-router-dom';
import WishesList from './WishesList';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function WishContainer({ posts, children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLink = to => {
    if (user) return navigate(to);
    alert('로그인 후 이용 가능합니다!');
  };

  return (
    <section>
      <div className="flex justify-between mb-2">
        <div className="flex items-stretch gap-1">{children}</div>
        <button
          type="button"
          onClick={() => handleLink('/create')}
          className="inline-flex items-center justify-center bg-primary min-h-10 rounded-md px-3 py-2 text-light hover:bg-opacity-50 transition-all duration-200"
        >
          소원 작성하기
        </button>
      </div>
      <WishesList posts={posts} />
    </section>
  );
}
