import { useRouter } from 'next/router';

const Pagination: React.FC = () => {
  const router = useRouter();
  const { q, sort } = router.query;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const size = router.query.size ? router.query.size : '10';
    const buttonValue = (event.target as HTMLInputElement).value;
    const from = (parseInt(buttonValue) - 1) * parseInt(size as string) + 1;
    router.push({
      pathname: '/search',
      query: { q, sort, size, from },
    });
  };

  return (
    <ul className="flex">
      <li className="mx-1 bg-gray-200 text-gray-500 rounded-lg">
        <button className="px-3 py-2 flex items-center font-bold">
          <span className="mx-1">Previous</span>
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button
          value={1}
          onClick={handleClick}
          className="px-3 py-2 font-bold"
        >
          1
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button
          value={2}
          onClick={handleClick}
          className="px-3 py-2 font-bold"
        >
          2
        </button>
      </li>
      <li className="mx-1 bg-gray-200 text-primary rounded-lg">
        <button
          value={3}
          onClick={handleClick}
          className="px-3 py-2 font-bold"
        >
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
