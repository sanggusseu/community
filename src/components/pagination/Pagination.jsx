import { useContext, useState } from 'react';
import PaginationItem from './PaginationItem';
import { WishContext } from '../../context/WishContext';

export default function Pagination({ handlePage, currentPage }) {
  const { pageCount } = useContext(WishContext);
  const paginationItems = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationItems.push(
      <PaginationItem
        key={i}
        page={i}
        handlePage={handlePage}
        currentPage={currentPage}
      />,
    );
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount) {
      handlePage(currentPage + 1);
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-center mt-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
        <ul className="flex items-center -space-x-px h-10 text-base">
          {paginationItems}
        </ul>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === pageCount}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
