import { useState } from 'react';
import { useRouter } from 'next/router';

const Form: React.FC = () => {
  const router = useRouter();
  const [q, setQ] = useState(router.query.q);
  const [sort, setSort] = useState(router.query.sort);
  const [size, setSize] = useState(router.query.size);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'q':
        setQ(event.target.value);
        break;
      case 'sort':
        setSort(event.target.value);
        router.push({
          pathname: '/search',
          query: { q, sort: event.target.value, size },
        });
        break;
      case 'size':
        setSize(event.target.value);
        // the input value is not getting updated in this case
        router.push({
          pathname: '/search',
          query: { q, sort, size: event.target.value },
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/search',
      query: { q, sort, size },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="items-center">
      <div className="flex">
        <input
          type="text"
          name="q"
          value={q}
          onChange={handleChange}
          placeholder="Search"
          aria-label="Search"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 w-1/2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        />
        <button
          onClick={handleSubmit}
          className="inline-block text-sm px-4 py-3 mx-3 leading-none border rounded text-white bg-black border-black lg:mt-0"
        >
          Search
        </button>
      </div>
      <div className="inline-block my-6">
        <label htmlFor="field-order-by">Items per page:</label>
        <select
          className="bg-white"
          id="field-order-by"
          name="size"
          onChange={handleChange}
          onBlur={handleChange}
          value={sort}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="inline-block my-6 float-right">
        <label htmlFor="field-order-by">Order by:</label>
        <select
          className="bg-white"
          id="field-order-by"
          name="sort"
          onChange={handleChange}
          onBlur={handleChange}
          value={sort}
        >
          <option value="score:desc">Relevance</option>
          <option value="title_string:asc">Name Ascending</option>
          <option value="title_string:desc">Name Descending</option>
          <option value="metadata_modified:desc">Last Modified</option>
          <option value="views_recent:desc">Popular</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
