export default function PaginationItem({ handlePage, page, currentPage }) {
  return (
    <li>
      <button
        onClick={() => handlePage(page)}
        type="button"
        className={`flex items-center justify-center px-4 h-10 leading-tight  ${currentPage === page ? 'bg-primary text-light' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
      >
        {page}
      </button>
    </li>
  );
}
