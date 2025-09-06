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
      <div className="mt-10 max-w-3xl text-center px-4">
        <p>Where Every Ball Tells a Story.</p>
        <p>
          The Bhawani Dutt Cricket Tournament is more than just a
          competition—it's a celebration of cricket&apos;s spirit, teamwork, and
          passion. Whether you&apos;re a seasoned player or a newcomer, this
          tournament offers a platform to showcase your skills, connect with
          fellow enthusiasts, and create unforgettable memories on and off the
          field. Every match is an opportunity to write your own chapter in our
          cricketing legacy. Join us to experience the thrill, camaraderie, and
          excitement that make every ball count. Register now and be part of a
          community where every moment matters!
        </p>
      </div>
    </div>
  );
};

export default Home;
