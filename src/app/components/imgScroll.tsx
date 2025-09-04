"use client";
import React, { useState, useEffect } from "react";
import img1 from "@/../public/11.jpg";
import img2 from "@/../public/5.jpg";
import img3 from "@/../public/20.jpg";
import img4 from "@/../public/23.jpg";
import Image from "next/image";

const images = [img1.src, img2.src, img3.src, img4.src];

export default function ImgScroll() {
  const [current, setCurrent] = useState(0);

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goToImage = (idx: number) => setCurrent(idx);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[40dvh] sm:h-[70dvh] py-2 flex flex-col items-center justify-center gap-1 sm:gap-2">
      <button
        onClick={prevImage}
        className="absolute left-[5%] transform -translate-x-1/2 p-1 z-10 flex items-center justify-center rounded-full bg-gray-400/30 dark:bg-gray-100/30 hover:bg-gray-400 dark:hover:bg-gray-100"
        aria-label="Previous"
      >
        <span className="material-icons-outlined text-9xl">chevron_left</span>
      </button>
      <div className="relative w-[80%] h-full flex items-center justify-center rounded-xl overflow-hidden bg-zinc-400 dark:bg-zinc-900">
        <Image
          src={images[current]}
          alt={`Image ${current + 1}`}
          width={1980}
          height={1080}
          className="h-full object-contain"
        />
      </div>
      <button
        onClick={nextImage}
        className="absolute right-[5%] transform translate-x-1/2 p-1 z-10 flex items-center justify-center rounded-full bg-gray-400/30 dark:bg-gray-100/30 hover:bg-gray-400 dark:hover:bg-gray-100"
        aria-label="Next"
      >
        <span className="material-icons-outlined text-9xl">chevron_right</span>
      </button>
      <div className="flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-violet-500" : "bg-gray-300"
            } transition`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
