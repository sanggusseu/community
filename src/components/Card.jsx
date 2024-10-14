import React from 'react';
import { TbMoneybag, TbBuildingStore, TbUser } from 'react-icons/tb';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Card({
  title,
  link,
  memo,
  author,
  createdAt,
  price,
  id,
}) {
  const handleLink = e => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link);
  };

  return (
    <Link
      to={`/posts/${id}`}
      className="rounded overflow-hidden shadow-lg bg-white p-6"
    >
      <strong className="font-bold text-xl mb-2 block truncate">{title}</strong>
      <p className="text-gray-700 text-base mb-4 truncate">{memo}</p>
      <div className="flex items-center text-gray-600 mb-2">
        <TbMoneybag className="mr-2" />
        <span>{price}원</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <TbBuildingStore className="mr-2" />
        <button
          type="button"
          className="hover:underline"
          onClick={e => handleLink(e)}
        >
          구매처
        </button>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <TbUser className="mr-2" />
        <span>{author}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <CiCalendarDate className="mr-2" />
        <span>{createdAt}</span>
      </div>
    </Link>
  );
}
