import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center sm:justify-center min-h-screen">
      <h1 className="w-full text-center text-3xl sm:text-4xl font-bold max-sm:mt-50 mb-4">
        Welcome to the Bhawani Dutt Cricket Tournament
      </h1>
      <p className="w-full text-center text-lg mb-8">
        Register now to participate in the tournament!
      </p>
      <a
        href="/register"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register Now
      </a>
      <Image
        src="/bdcs.png"
        alt="Bhawani Dutt Cricket Stadium"
        width={1395}
        height={800}
        className="absolute inset-0 object-cover -z-10"
      />
    </div>
  );
};

export default Home;
