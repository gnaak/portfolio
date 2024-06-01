"use client";
import { useEffect, useState } from "react";
import lightmode from "@/assets/lightmode.svg";
import Image from "next/image";
import link from "@/assets/link.png";
import useStore from "@/store";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";
import home from "@/assets/home.png";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const { menu, setMenu, isMenu, setSideMenu, setSmallMenu, setNum1, setNum2 } =
    useStore();
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
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
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
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  const handleMouseEnter = () => {
    setMenu(true);
    setNum2(1);
  };
  const location = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 3xl:right-0 w-screen right-0 flex flex-row items-center justify-between select-none bg-white opacity-90 dark:bg-gray-900 dark:text-white">
        <div className="flex flex-row xl:gap-5 gap-3 p-3 ">
          {menu ? (
            <>
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
            </>
          ) : (
            <>
              <span
                className="material-symbols-outlined cursor-pointer"
                onMouseEnter={() => (isLargeScreen ? handleMouseEnter() : null)}
                onClick={() => (isLargeScreen ? null : setSmallMenu(true))}
              >
                menu{" "}
              </span>
            </>
          )}
          <div className="md:flex hidden flex-row gap-2">
            <span
              className="cursor-pointer"
              onClick={() => {
                location.length > 1 ? router.push("/") : handletop();
              }}
            >
              HOME
            </span>
            {location.length > 1 ? <span>/</span> : null}
            <span>{location.substring(1).toUpperCase()}</span>
          </div>
        </div>
        <div className="xl:px-10 md:px-3 px-1">
          <div className="flex flex-row p-2 justify-between w-30 items-center ">
            <div
              className="md:w-8 md:h-8 w-6 h-6 relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={toggleDarkMode}
            >
              <Image src={lightmode} alt="다크모드" />
              {open ? (
                <div className="absolute border border-gray-400 top-full left-1/2 transform -translate-x-1/2 right-full w-16 items-center justify-center text-xs dark:text-white xl:flex hidden">
                  {darkMode ? (
                    <span>라이트 모드</span>
                  ) : (
                    <span>다크 모드</span>
                  )}
                </div>
              ) : null}
            </div>
            <div className="md:w-8 md:h-8 w-6 h-6">
              <a href="https://github.com/gnaak">
                <Image src={link} alt="깃허브" />
              </a>
            </div>
            <div
              className="md:w-7 md:h-7 w-5 h-5"
              onClick={() => {
                location.length > 1 ? router.push("/") : handletop();
              }}
            >
              <Image src={home} alt="홈" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkModeToggle;
