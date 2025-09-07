"use client";
import React, { useState, useEffect, useRef } from "react";
import img1 from "@/../public/11.jpg";
import img2 from "@/../public/5.jpg";
import img3 from "@/../public/20.jpg";
import img4 from "@/../public/23.jpg";
import Image from "next/image";
import { int } from "drizzle-orm/mysql-core";

const images = [img1.src, img2.src, img3.src, img4.src];

export default function ImgScroll() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intRef = useRef<NodeJS.Timeout | null>(null);

  const prevImage = () => {
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setAnimating(false);
    }, 300);
  };
  const nextImage = () => {
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 300);
  };

  const goToImage = (idx: number) => {
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
      if (intRef.current) intRef.current.refresh();
    }, 300);
  };

  useEffect(() => {
    intRef.current = setInterval(() => {
      setDirection("right");
      const x = setTimeout(() => {
        nextImage();
        clearTimeout(x);
      }, 200);
    }, 7000);
    return () => {
      if (intRef.current) clearInterval(intRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center sm:px-30 gap-3">
      <button
        onClick={() => {
          setDirection("left");
          const x = setTimeout(() => {
            prevImage();
            clearTimeout(x);
          }, 200);
        }}
        className="absolute left-0 sm:left-22 w-5 h-10 z-10 flex items-center justify-center rounded-full bg-gray-400/60 dark:bg-gray-100/60 hover:bg-gray-400"
        aria-label="Previous"
      >
        <span className="material-icons-outlined">chevron_left</span>
      </button>
      <div className="relative max-sm:w-full sm:h-[64dvh] flex items-center rounded-md shadow-lg shadow-black/60 overflow-hidden">
        <Image
          src={images[current]}
          alt={`Image ${current + 1}`}
          width={1980}
          height={1080}
          className="max-sm:w-full sm:h-full"
        />
        <Image
          src={
            direction === "right"
              ? current === images.length - 1
                ? images[0]
                : images[current + 1]
              : current === 0
              ? images[images.length - 1]
              : images[current - 1]
          }
          alt={`Image ${current + 1}`}
          width={1980}
          height={1080}
          className={`absolute max-sm:w-full sm:h-full transition-transform duration-500 ${
            animating
              ? "translate-x-0 opacity-100"
              : direction === "right"
              ? "translate-x-full opacity-0"
              : "-translate-x-full opacity-0"
          }`}
        />
      </div>
      <button
        onClick={() => {
          setDirection("right");
          const x = setTimeout(() => {
            nextImage();
            clearTimeout(x);
          }, 200);
        }}
        className="absolute right-0 sm:right-22 w-5 h-10 z-10 flex items-center justify-center rounded-full bg-gray-400/60 dark:bg-gray-100/60 hover:bg-gray-400"
        aria-label="Next"
      >
        <span className="material-icons-outlined text-9xl">chevron_right</span>
      </button>
      <div className="flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? "right" : "left");
              const x = setTimeout(() => {
                goToImage(idx);
                clearTimeout(x);
              }, 200);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              current === idx ? "w-4 sm:w-6 bg-pink-800" : "bg-gray-400"
            } transition`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
