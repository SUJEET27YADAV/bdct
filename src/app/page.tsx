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
      <div className="w-full flex items-center justify-between px-10 py-20 bg-[url('/ball.png')] bg-cover bg-center">
        <p className="w-[42%] text-center text-5xl text-lime-500 font-bold uppercase">
          Where Every <span className="text-9xl">Ball</span> Tells a{" "}
          <span className="text-9xl">Story!</span>
        </p>
        <div className="w-[56%] flex flex-col items-end justify-center gap-5">
          <p className="text-center text-red-300">
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
            className="flex items-center justify-center gap-1 p-2 rounded-lg bg-gray-200 dark:bg-gray-900 font-bold"
          >
            <span>More Info</span>
            <span className="material-icons-outlined">arrow_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
