"use client";
import { useEffect, useState } from "react";
import lightmode from "@/assets/lightmode.svg";
import Image from "next/image";
import link from "@/assets/link.png";
import { usePathname } from "next/navigation";

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
    console.log(123);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  const location = usePathname();
  console.log(location);
  const locationreplace = (location:string) => {
    location
      const realLoca = location.substring(1,).toUpperCase();
      return realLoca;
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="absolute 3xl:top-0 3xl:left-0 w-full flex flex-row xl:justify-between select-none border border-black items-center pr-10">
        <div className="flex flex-row p-1 justify-between w-[20%]">
          <div className="flex flex-row xl:gap-5 p-1">
            {open ? (
              <>
                <span className="material-symbols-outlined cursor-pointer">
                  keyboard_double_arrow_right
                </span>
              </>
            ) : (
              <>
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onMouseEnter={() => setOpen(true)}
                >
                  menu{" "}
                </span>
              </>
            )}
            <div className="flex flex-row xl:gap-2">
              HOME
              <span className={`cursor-pointer ${location?.length > 1 ? 'inline' : 'hidden' }`}>/&nbsp;{locationreplace(location)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row p-3 justify-between w-[5%]">
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
