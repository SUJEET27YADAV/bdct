"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import "material-icons/iconfont/material-icons.css";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "./togglebtn";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const dref = useRef<HTMLDivElement>(null);
  const dbref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (drawerOpen) {
      const handleDrawerClose = (event: MouseEvent) => {
        if (dref.current && dbref.current) {
          const db = dbref.current;
          const d = dref.current;
          if (
            !db.contains(event.target as Node) &&
            (!d.contains(event.target as Node) ||
              (event.target as HTMLElement).closest("#list"))
          ) {
            if ((event.target as HTMLElement).closest("#list")) {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 500);
            } else {
              setDrawerOpen(false);
            }
          }
        }
      };

      document.addEventListener("mousedown", handleDrawerClose);
      return () => {
        document.removeEventListener("mousedown", handleDrawerClose);
      };
    }
  }, [drawerOpen]);

  useEffect(() => {
    if (darkMode) setTheme("dark");
    else setTheme("light");
  }, [darkMode]);

  return (
    <>
      <nav className="relative top-0 z-50 px-2 sm:px-5 flex items-center justify-between bg-white text-zinc-900">
        <button
          ref={dbref}
          className="max-sm:flex hidden items-center justify-center cursor-pointer"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="material-icons-outlined">menu</span>
        </button>
        <div className="flex items-center justify-center bg-white/30">
          <Image
            src="/logo.png"
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
          <ul
            id="list"
            className="flex max-sm:flex-col items-center sm:justify-center gap-1 sm:gap-10 list-none"
          >
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
                href="/gallery"
                className="w-full h-full font-bold text-lg flex items-center justify-center"
              >
                Gallery
              </Link>
            </li>

            <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
              <Link
                href="/aboutus"
                className="w-full h-full font-bold text-lg flex items-center justify-center"
              >
                About
              </Link>
            </li>
            <li className="max-sm:w-full max-sm:p-2 max-sm:bg-white/30">
              <Link
                href="/contactus"
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
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </nav>
      <div
        className={`w-full flex items-center justify-center gap-2 p-2 ${
          darkMode ? "bg-blue-400" : "bg-red-400"
        }`}
      >
        <span className="text-sm font-semibold italic font-sans">
          Bright Mode
        </span>
        <ToggleButton enabled={darkMode} setEnabled={setDarkMode} />
        <span className="text-sm font-semibold italic font-sans">
          Dark Mode
        </span>
      </div>
    </>
  );
};

export default Navbar;
