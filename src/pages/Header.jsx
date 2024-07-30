"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="w-screen antialiased bg-gray-100 fixed z-50 mt-0 md:mt-24 lg:mt-10 h-[15vh] top-0 left-0">
      <div className="w-full text-gray-700 bg-white shadow-md">
        <div className="flex flex-col w-10/12 m-auto px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4 w-full">
            <div className="flex items-center">
              <Image src={'/assets/logo.jpg'} alt='logo' height={50} width={50} />
              <div className="text-center flex space-x-1">
                <span className="text-2xl md:text-4xl font-bold text-blue-600 drop-shadow-lg transform hover:scale-110 transition-transform">N</span>
                <span className="text-2xl md:text-4xl font-bold text-blue-600 drop-shadow-lg transform hover:scale-110 transition-transform">E</span>
                <span className="text-2xl md:text-4xl font-bold text-blue-600 drop-shadow-lg transform hover:scale-110 transition-transform">C</span>
              </div>
            </div>

            {/* Hamburger for small screens */}
            <button
              className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                  }`}
              />
            </button>

          </div>

          {/* Responsive navbar */}
          <nav
            className={`${isOpen ? 'flex' : 'hidden'
              } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <Link href="#home" passHref>
              <span className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Home
              </span>
            </Link>

            <Link href="#courses" passHref>
              <span className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Courses
              </span>
            </Link>
            <Link href="#Testinomial" passHref>
              <span className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Testimonials
              </span>
            </Link>
            <Link href="#gallary" passHref>
              <span className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Gallery
              </span>
            </Link>
            <Link href="#contact" passHref>
              <span className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
