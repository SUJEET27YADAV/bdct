import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgScroll from "./components/imgScroll";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center sm:justify-center min-h-[calc(100dvh-(--spacing(16)))]">
      <ImgScroll />
      <h1 className="w-full text-center text-3xl sm:text-4xl font-bold mt-4 mb-4">
        Welcome to the Bhawani Dutt Cricket Tournament
      </h1>
      <p className="w-full text-center text-lg mb-8">
        Register now to participate in the tournament!
      </p>
      <Link
        href="/register"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register Now
      </Link>
    </div>
  );
};

export default Home;
