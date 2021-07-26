import { useRouter } from 'next/router';
import React from 'react';
import utils from '../../utils';

interface IPaginationButton {
  value: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PaginationButton: React.FC<IPaginationButton> = ({
  value,
  handleClick,
}) => {
  return (
    <button
      value={value}
      onClick={handleClick}
      className="px-3 py-2 mx-1 font-bold bg-gray-200 text-primary rounded-lg"
    >
      {value}
    </button>
  );
};

const Pagination: React.FC<{ total: number }> = ({ total }) => {
  const router = useRouter();
  const { q, sort } = router.query;
  const [current, setCurrent] = React.useState(1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const size = router.query.size ? router.query.size : '10';
    const buttonValue = (event.target as HTMLInputElement).value;
    setCurrent(Number(buttonValue));
    const from = (parseInt(buttonValue) - 1) * parseInt(size as string);
    router.push({
      pathname: '/search',
      query: { q, sort, size, from },
    });
  };

  const paginationRange = utils.pagination(current, total);

  return (
    <div className="mt-24 flex justify-center">
      {paginationRange.map((item, index) =>
        Number.isInteger(item) ? (
          <PaginationButton
            key={item}
            value={item}
            handleClick={handleClick}
          />
        ) : (
          <span key={`${item}-${paginationRange[index - 1]}`}>{item}</span>
        )
      )}
    </div>
  );
};

export default Pagination;
