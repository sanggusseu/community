import { useContext, useEffect, useState } from 'react';
import Separator from '../components/Separator';
import { WishContext } from '../context/WishContext';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function DetailPage() {
  const { handleGetPostById, handleDeletePost } = useContext(WishContext);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchGetPostById = async () => {
      const data = await handleGetPostById(id);
      setPost(data);
    };

    fetchGetPostById();
  }, [post]);

  const handleDelete = async () => {
    await handleDeletePost(id);
    navigate(-1);
  };

  const handleEdit = () => {
    if (post.userId === user.userId) {
      navigate(`/edit/${id}`);
    } else {
      alert('작성자만 수정할 수 있습니다!');
    }
  };
  return (
    <section>
      <div className="flex items-center my-8 text-dark dark:text-light">
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="text-gray-600 text-lg">
          <span>작성자: {post.author}</span>
          <span>작성일: {post.createdAt}</span>
          <button onClick={handleEdit} className="hover:underline mr-2">
            수정하기
          </button>
          <button onClick={handleDelete} className="hover:underline">
            삭제하기
          </button>
        </div>
      </div>
      <Separator />
      <div className="py-6 text-dark dark:text-light">
        <p>{post.memo}</p>
      </div>
      <Separator />
      <div className="flex flex-col text-dark dark:text-light">
        <a href={post.link} target="_blank">
          구매처
        </a>
        <span>{post.price}원</span>
      </div>
    </section>
  );
}
