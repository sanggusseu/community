import { useContext, useEffect, useState } from 'react';
import { WishContext } from '../context/WishContext';
import { AuthContext } from '../context/AuthContext';
import WishContainer from '../components/WishContainer';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';

export default function MyWish() {
  const { posts, fetchFilteredPosts } = useContext(WishContext);
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleGetMyPosts = async (page = 1, limit = 8) => {
    await fetchFilteredPosts('userId', user.userId, page, limit);
  };
  useEffect(() => {
    if (user) {
      handleGetMyPosts();
    } else {
      alert('로그인 후 이용 가능합니다!');
      navigate('/');
    }
  }, [user]);

  const handlePage = page => {
    if (currentPage === page) return;
    handleGetMyPosts(page);
    setCurrentPage(page);
  };

  return (
    <>
      <WishContainer posts={posts} />
      <Pagination handlePage={handlePage} currentPage={currentPage} />
    </>
  );
}
