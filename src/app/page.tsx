import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgScroll from "./components/imgScroll";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center gap-5 min-h-[calc(100dvh-(--spacing(16)))]">
      <ImgScroll />
      <div className="w-full flex flex-col items-center justify-center">
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
      <div className="relative w-full flex max-sm:flex-col sm:items-center sm:justify-between px-3 sm:px-10 py-6 sm:py-30 overflow-hidden">
        <Image
          src="/ball.png"
          alt="image"
          width={1536}
          height={1024}
          className="absolute left-0 -z-10 object-cover opacity-90 dark:opacity-100"
        />
        <div className="w-full sm:w-[45%] flex flex-wrap max-sm:justify-center max-sm:gap-1 items-center sm:flex-col text-2xl sm:text-5xl text-lime-500 font-bold sm:uppercase">
          <p className="w-fit">
            Where <span className="sm:text-8xl">every</span>
          </p>
          <p className="max-sm:flex max-sm:gap-1">
            <span className="sm:text-9xl">Ball</span>
            <span>tells a</span>
          </p>
          <span className="sm:text-9xl">Story!</span>
        </div>
        <div className="w-full sm:w-[50%] flex flex-col items-end justify-center gap-0.5 sm:gap-5">
          <p className="w-full text-center text-white sm:text-red-300 max-sm:text-[10.5px]">
            The Bhawani Dutt Cricket Tournament is more than just a
            competition—it&apos;s a celebration of cricket&apos;s spirit,
            teamwork, and passion. Whether you&apos;re a seasoned player or a
            newcomer, this tournament offers a platform to showcase your skills,
            connect with fellow enthusiasts, and create unforgettable memories
            on and off the field. Every match is an opportunity to write your
            own chapter in our cricketing legacy. Join us to experience the
            thrill, camaraderie, and excitement that make every ball count.
            Register now and be part of a community where every moment matters!
          </p>
          <Link
            href="\aboutus"
            className="flex items-center justify-center px-2 sm:p-2 rounded-lg bg-gray-200 dark:bg-gray-900 max-sm:text-[10px]"
          >
            <span className="hover:underline">More Info</span>
            <span className="material-icons-outlined text-[8px]">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-30 flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default Home;
