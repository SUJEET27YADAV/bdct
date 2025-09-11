"use client";
import React, { useRef, useState, useEffect } from "react";
import ImgScroll from "./imgScroll";
import Link from "next/link";

export default function HeroSection() {
  const [rows, setRows] = useState<number>(0);
  const [dots, setDots] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  function calculateDots() {
    const hero = heroRef.current;
    if (!hero) return setDots(0);
    const w = hero?.offsetWidth ?? 0;
    const h = hero?.offsetHeight ?? 0;
    const dotArea = 32;
    const wid = Math.floor(w / dotArea);
    const len = Math.floor(h / dotArea);
    setRows(len);
    setDots(wid);
    // setDots(Array.from({ length: len }, (_, i) => i));
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      calculateDots();
    });
    calculateDots();
    resizeObserver.observe(heroRef.current!);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full flex flex-col items-center p-4 gap-2 overflow-hidden"
    >
      <div className="absolute -z-10 top-0 w-full h-[calc(100%+(--spacing(8)))] flex flex-col gap-4">
        {Array.from({ length: rows }, (_, i) => i).map((i) => (
          <div
            key={i}
            className="w-full h-8 flex items-center justify-center gap-5 *:w-4"
          >
            {Array.from({ length: dots }, (_, n) => n).map((j) => {
              return (
                <span
                  key={j}
                  className={`aspect-square rounded-full ${
                    i >= 8
                      ? "bg-white"
                      : i >= 5
                      ? "bg-blue-100"
                      : i >= 3
                      ? "bg-blue-200"
                      : "bg-blue-300"
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <ImgScroll />
      <p className="w-full text-center font-bold text-lg py-4">
        Register now to participate in our upcoming tournaments !
      </p>
      <Link
        href="/register"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register Now
      </Link>
    </div>
  );
}
