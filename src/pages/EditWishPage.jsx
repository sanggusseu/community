import { useNavigate, useParams } from 'react-router-dom';
import WishForm from '../components/WishForm';
import { useContext, useEffect, useState } from 'react';
import { WishContext } from '../context/WishContext';

export default function EditWishPage() {
  const { handleGetPostById } = useContext(WishContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValue, setInitialValue] = useState(null);
  const { handleUpdatePost } = useContext(WishContext);

  useEffect(() => {
    const fetchGetPostById = async () => {
      const data = await handleGetPostById(id);
      setInitialValue({ ...data, price: data.price.replace(/,/g, '') });
    };

    fetchGetPostById();
  }, []);

  const handleOnSubmit = data => {
    handleUpdatePost(id, {
      ...data,
      price: Number(data.price).toLocaleString(),
    });
    navigate(-1);
  };

  if (!initialValue) return;

  return (
    <section>
      <WishForm
        handleOnSubmit={handleOnSubmit}
        initialValue={initialValue}
        submitBtn="수정하기"
      />
    </section>
  );
}
