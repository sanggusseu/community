import { useContext, useEffect, useState } from 'react';
import { WishContext } from '../context/WishContext';
import WishContainer from '../components/WishContainer';
import SearchInput from '../components/SearchInput';

export default function OtherWishes() {
  const { posts, fetchPosts } = useContext(WishContext);
  const { fetchFilteredPosts } = useContext(WishContext);
  const [queryData, setQueryData] = useState({ query: 'title', value: '' });

  useEffect(() => {
    const handleGetPosts = async () => {
      await fetchPosts();
    };

    handleGetPosts();
  }, []);

  const handleSearch = e => {
    const { name, value } = e.target;
    setQueryData(prevData => {
      const newQueryData = { ...prevData, [name]: value };
      fetchFilteredPosts(newQueryData.query, newQueryData.value);
      return newQueryData;
    });
  };

  return (
    <WishContainer posts={posts}>
      <SearchInput queryData={queryData} handleSearch={handleSearch} />
    </WishContainer>
  );
}
