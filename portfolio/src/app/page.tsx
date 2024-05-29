'use client'

import Image from "next/image";
import Headers from "../components/Headers";
import Base from "../components/Base";
import Skills from "../components/Skills/Skills";
import Certi from "../components/Certificates";
import Exp from "../components/Experience";
import Projects from "../components/Projects/Projects";
import profile from "@/assets/projects/skawkaks.png";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DarkModeToggle from "@/components/DarkMode";
const Home = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [isMenu, setMenu] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [sideBarIcon, setSideBarIcon] = useState<boolean>(false);
  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const expRef = useRef(null);
  const pjtRef = useRef(null);
  const handleCheck = () => {
    setTimeout(() => {
      if (isMenu) return;
      else setOpen(false);
    }, 1000);
  };
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative overflow-hidden h-screen dark:bg-gray-800 dark:text-white ">
        <div className="border border-black text-end">
          <DarkModeToggle />
        </div>
        {/* <Headers /> */}
        <div className="flex flex-col overflow-auto h-full">
          <div
            ref={baseRef}
            className="w-full flex-col flex items-center py-10"
          >
            <Base />
          </div>
          <div
            ref={skillRef}
            className="w-full flex-col flex items-center py-10"
          >
            <Skills />
          </div>
          <div
            ref={certiRef}
            className="w-full flex-col flex items-center py-10"
          >
            <Certi />
          </div>
          <div ref={expRef} className="w-full flex-col flex items-center py-10">
            <Exp />
          </div>
          <div ref={pjtRef} className="w-full flex-col flex items-center py-10">
            <Projects />
          </div>
        </div>
        <div className="absolute top-0 left-0 xl:w-1/6 xl:h-screen flex flex-col xl:justify-between z-30 pb-10 select-none">
          <div className="flex flex-row xl:gap-5 p-3">
            {open ? (
              <>
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onMouseLeave={handleCheck}
                  onClick={() => {
                    setSideBar(true);
                    setOpen(false);
                  }}
                >
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
              <span className="cursor-pointer">HOME</span>
            </div>
          </div>
          <>
            <div
              className={`h-full w-3/4 flex items-start`}
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <div
                className={`w-full xl:p-7 border border-gray-200 shadow-lg bg-gray-100 transition-opacity duration-5000 dark:dark:bg-gray-700 dark:border-none ${
                  open ? "animate-fadeInLeft" : "animate-fadeOutLeft"
                }`}
              >
                <div className="flex flex-col xl:gap-10">
                  <div className="flex flex-row xl:gap-3">
                    <Image
                      src={profile}
                      alt="프로필"
                      className="w-6 h-6 rounded-full"
                    />
                    <span>이근학</span>
                  </div>
                  <div className="flex flex-col xl:gap-3">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(baseRef)}
                    >
                      소개
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(skillRef)}
                    >
                      SKILLS
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(certiRef)}
                    >
                      CERTIFICATES{" "}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(expRef)}
                    >
                      EXPERIENCE{" "}
                    </span>

                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(pjtRef)}
                    >
                      PROJECTS
                    </span>
                    <div className="flex flex-col xl:gap-2 xl:px-3 text-sm">
                      <span
                        className="cursor-pointer"
                        onClick={() => router.push("/divamusic")}
                      >
                        1️⃣ DIV★
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => router.push("/readit")}
                      >
                        2️⃣ READIT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div
          className={`absolute top-0 left-0 xl:w-1/6 xl:h-screen z-50 select-none ${
            sideBar ? "" : "animate-fadeOutLeft"
          }`}
        >
          <div
            className="flex flex-col xl:justify-between pb-10 w-3/4 border border-gray-200 bg-gray-100 h-full dark:dark:bg-gray-700 dark:border-none"
            onMouseEnter={() => setSideBarIcon(true)}
            onMouseLeave={() => setSideBarIcon(false)}
          >
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between xl:gap-5 p-3">
                <div className="flex flex-row xl:gap-3">
                  <Image
                    src={profile}
                    alt="프로필"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>이근학</span>
                </div>

                <span
                  className={`material-symbols-outlined cursor-pointer  ${
                    sideBarIcon ? "animate-fadeIn" : "animate-fadeOut"
                  }`}
                  onClick={() => setSideBar(false)}
                >
                  keyboard_double_arrow_left
                </span>
              </div>
              <div
                className={`w-3/4 xl:p-7 transition-opacity
              }`}
              >
                <div className="flex flex-col xl:gap-10">
                  <div className="flex flex-col xl:gap-3">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(baseRef)}
                    >
                      소개{" "}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(skillRef)}
                    >
                      SKILLS{" "}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(certiRef)}
                    >
                      CERTIFICATES
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(expRef)}
                    >
                      EXPERIENCE{" "}
                    </span>

                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(pjtRef)}
                    >
                      PROJECTS
                    </span>
                    <div className="flex flex-col xl:gap-2 xl:px-3 text-sm">
                      <span
                        className="cursor-pointer"
                        onClick={() => router.push("/divamusic")}
                      >
                        1️⃣ DIV★
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => router.push("/readit")}
                      >
                        2️⃣ READIT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
