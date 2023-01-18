/* eslint-disable @next/next/link-passhref */
import React from "react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      if (isOpen === true) {
        setIsOpen(!isOpen)
      } else {
        setIsOpen(isOpen)
      }
    }
  }, []);


  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      if (isOpen === true) {
        setIsOpen(!isOpen)
      } else {
        setIsOpen(isOpen)
      }
    })
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  return (
    <main className="fixed z-50 flex flex-row w-full top-[37px] shadow-gray-100 shadow-md selection:text-blue-800 bg-white ">
      <Link href="/">
        <div className="flex img cursor-pointer px-1 py-1">
          <Image src="/Harshit.png" alt="logo" width={50} height={50} />
        </div>
      </Link>
      <div className="border absolute overflow-hidden mt-3 py-[14.5px] border-gray-100  left-12 ml-3"></div>
      <div className="navButtons hidden md:flex ml-5">
        <ul className="flex flex-row text-[14px] font-normal space-x-4 content-center items-center">
          <Link href='/about'><li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-gray-hover-bg text-light-text-gray font-normal hover:text-cyan-text rounded-lg">About Me →</li></Link>
          <Link href='/contact'><li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-gray-hover-bg text-light-text-gray font-normal hover:text-cyan-text rounded-lg">Contact Me →</li></Link>
          <Link href='/projects'><li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-gray-hover-bg text-light-text-gray font-normal hover:text-cyan-text rounded-lg">Projects →</li></Link>
          <Link href='https://encodin.works'><li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-gray-hover-bg text-light-text-gray font-normal hover:text-cyan-text rounded-lg">Encodin →</li></Link>
        </ul>
      </div>

      <div className="navIcons absolute space-x-7 right-0 mt-2 mr-3">
        <div className="mborder border hidden md:hidden transform py-[13px] absolute mt-[6px] border-gray-100 "></div>
        <div
          className={`hammoblie flex 
        ${isOpen ? "mt-3.5" : "mt-[10px]"}
         sm:hidden`}
        >
          <div
            className="z-50 flex relative w-7 h-5 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span
              className={`h-1 w-full bg-slate-600 rounded-lg transform transition duration-200 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""
                }`}
            />

            <span
              className={`h-1 w-full bg-slate-600 rounded-lg transform transition duration-200 ease-in-out ${isOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
            />
          </div>
        </div>
        <div
          className={`absolute top-[50px]  overflow-x-hidden left-0 h-screen bg-white transform ${!isOpen
              ? "ease-in-out"
              : "-translate-x-[260px] duration-[200ms] ease-in w-screen drop-shadow-sm/2 bg-white"
            }
            ${isOpen ? "-translate-x-[260px] duration-200 ease-in-out" : "-translate-x-0 w-0 ease-in-out transition-all duration-500 left-0 bg-blue-200/90"
            }
            `}
        >

          <div className="container flex flex-col">
            <Link href='/'><div className="mt-6 flex flex-col cursor-pointer absolute left-[120px]">
              <Image src="/Harshit.png" alt="logo" width={50} height={50} />
            </div></Link>
            <div className="textIcons mt-2 space-y-4 left-[90px] font-medium text-[18px] top-[90px] absolute">
              <Link href='/about'><div className="flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text text-black bg-white rounded-xl hover:bg-gray-hover-bg">About Me</div></Link>
              <Link href='/contact'><span className="flex duration-300 ease-in-out transition  justify-center text-center flex-col px-1 py-1 hover:text-cyan-text text-black bg-white rounded-xl hover:bg-gray-hover-bg">Contact Me</span></Link>
              <Link href='/projects'><span className="flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text text-black bg-white rounded-xl hover:bg-gray-hover-bg">Projects</span></Link>
              <Link href='https://encodin.works?ref=harshitkumar.tech'><span className="flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text text-black bg-white rounded-xl hover:bg-gray-hover-bg">Encodin</span></Link>

            </div>
            <button className="mt-6 absolute top-[280px] left-[98px] font-medium bg-cyan-text/90 hover:bg-cyan-text px-8 py-2 rounded-full text-white"><span>Blogs</span></button>
            <div className="sBorder absolute border left-[52px] flex justify-center border-gray-300/90 top-[375px] px-[100px]"></div>
            <div className="Icons mt-1 absolute ml-2 top-[390px] flex flex-row space-x-9 left-[22px]">
              <Link href='https://github.com/harshitkumar9030'><img title="Github" className="w-8 h-8" src="icons/github.svg" alt="" /></Link>
              <Link href='https://twitter.com/@OhHarshit'><img title="Twitter" className="w-8 h-8" src="icons/twitter.svg" alt="" /></Link>
              <Link href='https://instagram.com/harshit_kumarofficial'><img title="Instagram" className="w-8 h-8" src="icons/instagram.svg" alt="" /></Link>
              <Link href='https://www.facebook.com/profile.php?id=100074113788424'><img title="Facebook" className="w-8 h-8" src="icons/facebook.svg" alt="" /></Link>
            </div>
            <div className="Icons mt-1 absolute ml-2 top-[440px] flex flex-row space-x-9 left-[22px]">
              <Link href='https://replit.com/@OhHarshit'><img title="Replit" className="w-8 h-8" src="icons/replit.svg" alt="" /></Link>
              <Link href='https://www.youtube.com/channel/UC12XvCD_kEp8IltG7xdjsXw'><img title="Youtube" className="w-8 h-8" src="icons/youtube.svg" alt="" /></Link>
              <Link href='https://discord.com/users/Harshit_#5855/'><img title="Discord" className="w-8 h-8" src="icons/discord.svg" alt="" /></Link>
              <Link href='https://linkedin.com/in/harshit-kumar-6b822a22a/'><img title="Linkedin" className="w-8 h-8" src="icons/linkedin.svg" alt="" /></Link>
            </div>
          </div>
        </div>
        <Link href='https://github.com/harshitkumar9030'><button className="rounded-lg hidden md:flex absolute top-[1px] md:top-0 font-normal sm:right-[90px] duration-300 ease-in-out transition hover:bg-gray-hover-bg hover:text-cyan-text bg-white  text-text-button py-2 px-5">
          Github
        </button></Link>
        <button onClick={()=>{
          router.push('/blogs')
        }} className="rounded-lg right-[70px] absolute top-[1px] md:top-0 hidden duration-300 ease-in-out transition bb sm:right-0 hover:bg-cyan-text bg-cyan-text/90 text-white py-2 px-5">
          Blogs
        </button>

      </div>
    </main>
  );
};

export default Navbar;
