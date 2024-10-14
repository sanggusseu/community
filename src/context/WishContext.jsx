import { createContext, useCallback, useState } from 'react';
import {
  createPost,
  deletePost,
  getFilteredPosts,
  getPostById,
  getPosts,
  updatePost,
} from '../services/WishService';

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [pageCount, setPageCount] = useState();

  const fetchPosts = useCallback(async (page = 1, limit = 8) => {
    try {
      const { data: fetchedPosts, totalCount } = await getPosts(page, limit);
      setPosts(fetchedPosts);
      setPageCount(Math.ceil(totalCount / limit));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchFilteredPosts = useCallback(
    async (query, value, page = 1, limit = 8) => {
      try {
        const { data: fetchedPosts, totalCount } = await getFilteredPosts(
          query,
          value,
          page,
          limit,
        );
        setPosts(fetchedPosts);
        setPageCount(Math.ceil(totalCount / limit));
      } catch (err) {
        console.error(err);
      }
    },
  );

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
        pageCount,
        handleCreatePost,
        fetchPosts,
        fetchFilteredPosts,
        handleGetPostById,
        handleDeletePost,
        handleUpdatePost,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};
