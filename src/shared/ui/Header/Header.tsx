/* eslint-disable prettier/prettier */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg';

const Header: React.FC = () => {
  return (
    <nav className="bg-transparent px-2 sm:px-4 pt-20 w-full z-20 top-0 left-0">
      <div className="container w-[89%] flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center transform transition duration-300 hover:scale-110"
        >
          <Image src={Logo} className="header-logo" alt="Logo" />
        </Link>
        <div className="flex md:order-2">
          <div className="mr-3">
            <Link
              href="/auth/signin/"
              className="text-black bg-wight focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-3.5 text-center mr-3 md:mr-0 border border-bordercolor dark:border-gray-600 transform transition duration-300 hover:scale-110"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              href="/auth/signup/"
              className="text-white bg-bordercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3.5 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-110"
            >
              create free account
            </Link>
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col px-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li className="">
              <Link
                href="/products/target-saving/"
                className="block py-2 text-md pl-3 pr-3.5 text-bordercolor md:p-0 dark:text-bordercolor text-[16px] transform transition duration-300 hover:scale-110 hover:font-extrabold font-medium"
                aria-current="page"
              >
                Save
              </Link>
            </li>
            <li>
              <Link
                href="/products/invest/"
                className="block text-md py-2 pl-3 pr-3.5 text-bordercolor md:p-0 dark:text-bordercolor text-[16px] transform transition duration-300 hover:scale-110 hover:font-extrabold font-medium"
              >
                Invest
              </Link>
            </li>
            <li>
              <Link
                href="/products/"
                className="block text-md py-2 pl-3 pr-3.5 text-bordercolor md:p-0 dark:text-bordercolor text-[16px] transform transition duration-300 hover:scale-110 hover:font-extrabold font-medium"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/faq/"
                className="block text-md py-2 pl-3 pr-3.5 text-bordercolor md:p-0 dark:text-bordercolor text-[16px] transform transition duration-300 hover:scale-110 hover:font-extrabold font-medium"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/blogs/"
                className="block text-md py-2 pl-3 pr-3.5 text-bordercolor md:p-0 dark:text-bordercolor text-[16px] transform transition duration-300 hover:scale-110 hover:font-extrabold font-medium"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
