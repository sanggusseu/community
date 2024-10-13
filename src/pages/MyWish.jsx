import { useContext, useEffect } from 'react';
import { WishContext } from '../context/WishContext';
import { AuthContext } from '../context/AuthContext';
import WishContainer from '../components/WishContainer';
import { useNavigate } from 'react-router-dom';

export default function MyWish() {
  const { posts, fetchFilteredPosts } = useContext(WishContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const handleGetMyPosts = async (query, value) => {
      await fetchFilteredPosts(query, value);
    };

    if (user) {
      handleGetMyPosts('userId', user.userId);
    } else {
      alert('로그인 후 이용 가능합니다!');
      navigate('/');
    }
  }, [user]);
  return <WishContainer posts={posts} />;
}
