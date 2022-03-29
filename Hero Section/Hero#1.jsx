import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

export default function Home() {
  return (
    <div className="mt-1">
      <div className="flex bg-white h-96 container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Welcome to <span className="text-pink-600">Your-name</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Welcome to my Personal website. Here you can get to know About
              me and as well as you can explore the blogs section and get to know
              what sort of things I post here.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
            <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-pink-500 px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">About me.</button> 
              <button className="md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-pink-500 px-5 py-3 rounded-xl text-sm text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-pink-300/80 shadow-pink-400/40 hover:bg-pink-600">Explore Blogs</button> 
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
          <div className="h-full object-cover" style={{backgroundImage: `url('https://www.digitalartsonline.co.uk/cmsdata/features/3641812/laptop_work_garden_lifestyle_2.jpg')`}}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
