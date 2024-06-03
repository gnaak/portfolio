"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import link from "@/assets/link.png";
import useStore from "@/store";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";
import useClear from "@/hooks/clear";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { menu, setMenu, isMenu, setSideMenu, setSmallMenu, setNum1, setNum2 } =
    useStore();
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const location = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const handleCheck = () => {
    setTimeout(() => {
      if (!isMenu) {
        setMenu(false);
      }
    }, 2000);
  };

  const handletop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    setMenu(true);
    setNum2(1);
  };

  const handleHomeClick = () => {
    location.length > 1 ? router.push("/") : handletop();
  };

    const clearall = useClear();
    useEffect(() => {
      clearall();
    }, []);
  

  return (
    <div className="fixed top-0 3xl:right-0 w-screen right-0 flex flex-row items-center justify-between select-none bg-white opacity-90 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row xl:gap-5 gap-3 p-3 ">
        {menu ? (
          <span
            className="material-symbols-outlined cursor-pointer"
            onMouseLeave={handleCheck}
            onClick={() => {
              setMenu(false);
              setNum1(1);
              setSideMenu(true);
            }}
          >
            keyboard_double_arrow_right
          </span>
        ) : (
          <span
            className="material-symbols-outlined cursor-pointer"
            onMouseEnter={() => isLargeScreen && handleMouseEnter()}
            onClick={() => !isLargeScreen && setSmallMenu(true)}
          >
            menu
          </span>
        )}
        <div className="md:flex hidden flex-row gap-2">
          <span className="cursor-pointer" onClick={handleHomeClick}>
            HOME
          </span>
          {location.length > 1 && <span>/</span>}
          <span>{location.substring(1).toUpperCase()}</span>
        </div>
      </div>
      <div className="xl:px-10 md:px-3 px-1">
        <div className="flex flex-row p-2 justify-between w-30 items-center">
          <div
            className="md:w-8 md:h-8 w-6 h-6 relative flex items-center justify-center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined cursor-pointer">
              light_mode
            </span>
            {open && (
              <div className="absolute border border-gray-400 top-full left-1/2 transform -translate-x-1/2 right-full w-20 items-center justify-center text-xs dark:text-white xl:flex hidden">
                {darkMode ? <span>라이트 모드</span> : <span>다크 모드</span>}
              </div>
            )}
          </div>
          <div className="md:w-8 md:h-8 w-6 h-6">
            <a href="https://github.com/gnaak">
              <Image src={link} alt="깃허브" />
            </a>
          </div>
          <div
            className="md:w-8 md:h-8 w-6 h-6 relative flex items-center justify-center"
            onClick={handleHomeClick}
          >
            <span className="material-symbols-outlined">home</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
