'use client'
import { useEffect, useState } from "react";

const Headers = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [position]);

  const handle = () => {
    alert("tlqkf");
  };
  return (
    <>
      {position > 20 ? (
        <div
          className={`flex flex-row justify-center fixed top-0
            bg-white 
          lg:h-20 md:h-16 h-12 w-full z-50 items-center`}
        >
          <div className="xl:w-4/5 w-full h-full justify-between flex flex-row items-center md:p-10 p-5">
            <div className="flex md:hidden font-bold text-xl">LGH</div>
            <div className="hidden md:flex">
              <span className="text-2xl font-bold ">LGH's Portfolio</span>
            </div>
            <div
              className="lg:hidden md:w-12 md:h-9 w-12 h-9 flex flex-row justify-center items-center border border-gray-400  rounded-md"
              onClick={handle}
            >
              <span className="material-symbols-outlined md:text-4xl text-3xl">
                menu
              </span>{" "}
            </div>
            <div className="w-[500px] flex-row justify-between font-bold text-xl hidden lg:flex">
              <span>About me</span>
              <span>Skills</span>
              <span>Projects</span>
              <span>Career</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-row justify-center fixed top-0 lg:text-white text-black
          lg:h-20 md:h-16 h-12 w-full z-50 bg-white lg:bg-black lg:bg-opacity-50 items-center`}
        >
          <div className="xl:w-4/5 w-full h-full justify-between flex flex-row items-center md:p-10 p-5">
            <div className="flex md:hidden font-bold text-xl">LGH</div>
            <div className="hidden md:flex">
              <span className="text-2xl font-bold ">LGH's Portfolio</span>
            </div>
            <div
              className="lg:hidden w-12 h-9 flex flex-row justify-center items-center border border-gray-400  rounded-md"
              onClick={handle}
            >
              <span className="material-symbols-outlined md:text-4xl text-3xl font-light">
                menu
              </span>{" "}
            </div>
            <div className="w-[500px] flex-row justify-between font-bold text-xl hidden lg:flex">
              <span>About me</span>
              <span>Skills</span>
              <span>Projects</span>
              <span>Career</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Headers;
