import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { WishContext } from '../context/WishContext';

export default function OtherWishes() {
  const { posts, fetchPosts } = useContext(WishContext);
  useEffect(() => {
    const handleGetPosts = async () => {
      await fetchPosts();
    };

    handleGetPosts();
  }, []);

  return (
    <section>
      <div className="flex justify-end mb-2">
        <Link
          to="/create"
          className="inline-flex items-center justify-center bg-primary min-h-10 rounded-md px-3 py-2 text-light hover:bg-opacity-50 transition-all duration-200"
        >
          소원 작성하기
        </Link>
      </div>
      {posts.length === 0 && (
        <strong className="text-3xl dark:text-gray-200 text-dark block mb-8">
          제일 먼저 소원을 작성해 보세요!
        </strong>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(post => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
