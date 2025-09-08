import Link from "next/link";
import React from "react";
import ImgScroll from "./components/imgScroll";
import AboutSection from "./components/aboutsection";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center p-4 gap-2 bg-[linear-gradient(to_bottom,#a5b4fc,_#bfdbfe_33%,_#22c55a_70%,_#fef08a)]">
        <h1 className="w-full flex flex-col items-center pb-2 font-bold">
          <span className="text-xl sm:text-4xl">Welcome to</span>
          <p className="flex flex-col sm:flex-row flex-wrap sm:gap-2 sm:justify-center items-center">
            <span className="text-3xl sm:text-4xl">Bhawani Dutt</span>
            <span className="text-2xl sm:text-4xl">Cricket Stadium</span>
          </p>
        </h1>
        <ImgScroll />
        <p className="w-full text-center text-lg py-4">
          Register now to participate in upcomming the tournament!
        </p>
        <Link
          href="/register"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register Now
        </Link>
      </div>
      <AboutSection />
    </>
  );
};

export default Home;
