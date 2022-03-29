import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="hover:shadow-md shadow-gray-400 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center md:flex-row">
        <a className="flex title-font md:mr-0 mr-2 font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href='/'><Image className="cursor-pointer" width={40} height={40} src="/images/logo.png" /></Link>
          <Link href='/'><span className="cursor-pointer ml-auto text-xl">Your name</span></Link>
        </a>
        <nav className="md:ml-auto ml-3  md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/'><a className="hover:shadow-md hover:shadow-pink-300 cursor-pointer mr-5 hover:border-2  hover:md:shadow-xl md:shadow-gray-500 hover:border-pink-500 rounded-lg py-1 px-2 hover:text-gray-900">Home</a></Link>
          <Link href='/contact'><a className="hover:shadow-md hover:shadow-pink-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-pink-500 rounded-lg py-1 px-2 hover:text-gray-900">Contact</a></Link>
          <Link href='/about'><a className="hover:shadow-md hover:shadow-pink-300 cursor-pointer mr-5 hover:border-2 hover:md:shadow-xl shadow-gray-500 hover:border-pink-500 rounded-lg py-1 px-2 hover:text-gray-900">About</a></Link>
        </nav>
        <Link href='/blogs'>
         <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-pink-500 px-8 py-3 rounded-full text-sm text-white hover:text-gray-200  shadow-xl hover:shadow-2xl hover:shadow-pink-500/80 shadow-pink-400/40 hover:bg-pink-500">Blogs</button> 
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
