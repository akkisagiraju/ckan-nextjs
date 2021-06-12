/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-4 border-b border-gray-200">
      <div className="flex items-center flex-shrink-0 text-gray-800 font-bold mr-6">
        <Link href="/">
          CDL oPub
          {/* <img
            src="/images/logo.svg"
            className="cursor-pointer"
            alt="portal logo"
            width="40"
          /> */}
        </Link>
      </div>
      <div className="block lg:hidden mx-4">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded text-gray-700 border-orange-400 hover:text-black hover:border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${open ? `block` : `hidden`} lg:block`}>
        <Link href="/blog">
          <a className="block mt-4 lg:inline-block lg:mt-0 active:bg-primary-background text-gray-700 hover:text-black mr-6">
            Blog
          </a>
        </Link>
        <Link href="/search">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-6">
            Search
          </a>
        </Link>
        <a
          href="http://tech.datopian.com/frontend/"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-6"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
        <a
          href="https://github.com/akkisagiraju/ckan-nextjs"
          className="inline-block text-tiny px-4 py-2 leading-none border rounded text-primary bg-primary-background border-black hover:border-gray-700 hover:text-gray-700 hover:bg-white mt-4 lg:mt-0"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Nav;
