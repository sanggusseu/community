import { Link } from 'react-router-dom';
import WishesList from './WishesList';

export default function WishContainer({ posts, children }) {
  return (
    <section>
      <div className="flex justify-between mb-2">
        <div className="flex items-stretch gap-1">{children}</div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center bg-primary min-h-10 rounded-md px-3 py-2 text-light hover:bg-opacity-50 transition-all duration-200"
        >
          소원 작성하기
        </Link>
      </div>
      <WishesList posts={posts} />
    </section>
  );
}
