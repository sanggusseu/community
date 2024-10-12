import { createContext, useCallback, useState } from 'react';
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from '../services/WishService';

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleCreatePost = async data => {
    try {
      await createPost(data);
      await fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetPostById = async id => {
    try {
      const fetchedPost = await getPostById(id);
      setPost(fetchedPost);
      return fetchedPost;
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePost = async id => {
    await deletePost(id);
    await fetchPosts();
  };

  const handleUpdatePost = async (id, data) => {
    await updatePost(id, { ...data });
    await fetchPosts();
  };

  return (
    <WishContext.Provider
      value={{
        posts,
        post,
        handleCreatePost,
        fetchPosts,
        handleGetPostById,
        handleDeletePost,
        handleUpdatePost,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};
