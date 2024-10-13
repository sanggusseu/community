import { useContext, useEffect, useState } from 'react';
import { WishContext } from '../context/WishContext';
import WishContainer from '../components/WishContainer';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/pagination/Pagination';

export default function OtherWishes() {
  const { posts, fetchPosts } = useContext(WishContext);
  const { fetchFilteredPosts } = useContext(WishContext);
  const [queryData, setQueryData] = useState({ query: 'title', value: '' });
  const [currentPage, setCurrentPage] = useState(1);

  const handleGetPosts = async page => {
    await fetchPosts(page);
  };

  useEffect(() => {
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

  const handlePage = page => {
    if (currentPage === page) return;
    handleGetPosts(page);
    setCurrentPage(page);
  };

  return (
    <>
      <WishContainer posts={posts}>
        <SearchInput queryData={queryData} handleSearch={handleSearch} />
      </WishContainer>
      <Pagination handlePage={handlePage} currentPage={currentPage} />
    </>
  );
}
