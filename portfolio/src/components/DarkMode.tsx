"use client";
import { useEffect, useState } from "react";
import lightmode from "@/assets/lightmode.svg";
import Image from "next/image";
import link from "@/assets/link.png";
import linkWhite from "@/assets/link_white.png";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    console.log(123)
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div className="absolute 3xl:top-0 3xl:right-12 lg:top-10 lg:right-10 flex flex-col xl:justify-between select-none">
        <div className="flex flex-row p-3 justify-between lg:w-24 ">
          <button onClick={toggleDarkMode}>
            <div
              className="w-8 h-8 relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Image src={lightmode} alt="다크모드" />
              {open ? (
                <div className="absolute border border-gray-400 top-full lg:translate-y-1/2 left-1/2 transform -translate-x-1/2 right-full w-36 text-xs dark:text-white">
                  {darkMode ? (
                    <span>switch to light mode</span>
                  ) : (
                    <span>switch to dark mode</span>
                  )}
                </div>
              ) : null}
            </div>
          </button>
          <div className="w-8 h-8">
            <a href="https://github.com/gnaak">
              <Image src={link} alt="깃허브" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkModeToggle;
