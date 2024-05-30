import { useEffect, useState } from "react";
import lightmode from "@/assets/lightmode.svg";
import Image from "next/image";
import link from "@/assets/link.png";
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

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="absolute top-0 3xl:right-0 w-screen right-0 flex flex-col items-end select-none bg-white  dark:bg-gray-900">
        <div className="lg:px-10 px-5">

        <div className="flex flex-row p-2 justify-between w-20">
          <button onClick={toggleDarkMode}>
            <div
              className="w-8 h-8 relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              >
              <Image src={lightmode} alt="다크모드" />
              {open ? (
                <div className="absolute border border-gray-400 top-full left-1/2 transform -translate-x-1/2 right-full w-36 text-xs dark:text-white">
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
      </div>
    </>
  );
};

export default DarkModeToggle;
