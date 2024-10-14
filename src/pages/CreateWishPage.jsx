import { useContext } from 'react';
import WishForm from '../components/WishForm';
import { AuthContext } from '../context/AuthContext';
import { WishContext } from '../context/WishContext';

export default function CreateWishPage() {
  const { user } = useContext(AuthContext);
  const { handleCreatePost } = useContext(WishContext);
  const handleSubmit = data => {
    const today = new Date().toISOString().split('T')[0];
    const { email, userId } = { ...user };
    handleCreatePost({
      ...data,
      createdAt: today,
      author: email,
      userId,
      price: Number(data.price).toLocaleString(),
    });
  };
  return (
    <section>
      <WishForm handleSubmit={handleSubmit} submitBtn="저장하기" />
    </section>
  );
}
