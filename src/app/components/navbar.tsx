"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import "material-icons/iconfont/material-icons.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const dref = useRef<HTMLDivElement>(null);
  const dbref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (drawerOpen) {
      const handleDrawerClose = (event: MouseEvent) => {
        if (
          dref.current &&
          dbref.current &&
          !dref.current.contains(event.target as Node) &&
          !dbref.current.contains(event.target as Node)
        ) {
          setDrawerOpen(false);
        }
      };

      document.addEventListener("mousedown", handleDrawerClose);
      return () => {
        document.removeEventListener("mousedown", handleDrawerClose);
      };
    }
  }, [drawerOpen]);

  return (
    <nav className="sticky top-0 z-50 px-2 sm:px-5 flex items-center justify-between bg-slate-400">
      <button
        ref={dbref}
        className="max-sm:flex hidden items-center justify-center cursor-pointer"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <span className="material-icons-outlined">menu</span>
      </button>
      <div className="flex items-center justify-center">
        <Image
          src="/logo2.png"
          alt="Bhawani Dutt Cricket Stadium"
          width={1200}
          height={1200}
          className="w-21"
        />
      </div>
      <div
        ref={dref}
        className={`max-sm:absolute max-sm:left-0 max-sm:top-16 max-sm:w-1/2 max-sm:h-screen max-sm:bg-gray-400/40 max-sm:dark:bg-gray-700/40 max-sm:z-30 max-sm:backdrop-blur-md max-sm:drop-shadow-xl ${
          drawerOpen ? "max-sm:block" : "max-sm:hidden"
        }`}
      >
        <ul className="flex max-sm:flex-col items-center sm:justify-center gap-1 sm:gap-10 list-none">
          <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
            <Link
              href="/"
              className="w-full h-full font-bold text-lg flex items-center justify-center"
            >
              Home
            </Link>
          </li>
          <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
            <Link
              href="/register"
              className="w-full h-full font-bold text-lg flex items-center justify-center"
            >
              Register
            </Link>
          </li>
          <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
            <Link
              href="/"
              className="w-full h-full font-bold text-lg flex items-center justify-center"
            >
              About
            </Link>
          </li>
          <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
            <Link
              href="/"
              className="w-full h-full font-bold text-lg flex items-center justify-center"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6">
        <span
          className="material-icons-outlined cursor-pointer"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;