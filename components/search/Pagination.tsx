import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';

const Pagination: React.FC = () => {
  const router = useRouter();
  const { q, sort, size, start } = router.query;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(event.target);
    // router.push({
    //   pathname: '/search',
    //   query: { q, sort, size },
    // });
  };

  return (
    <ul className="flex">
      <li className="mx-1 bg-gray-200 text-gray-500 rounded-lg">
        <button className="px-3 py-2 flex items-center font-bold">
          <span className="mx-1">Previous</span>
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button onClick={handleClick} className="px-3 py-2 font-bold">
          1
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button onClick={handleClick} className="px-3 py-2 font-bold">
          2
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button onClick={handleClick} className="px-3 py-2 font-bold">
          3
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button className="px-3 py-2 flex items-center font-bold">
          <span className="mx-1">Next</span>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
