/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Base from "@/components/Base";
import Skills from "@/components/Skills/Skills";
import Certi from "@/components/Certificates";
import Exp from "@/components/Experience";
import Projects from "@/components/Projects/Projects";
import profile from "@/assets/projects/skawkaks.png";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store";
import useClear from "@/hooks/clear";
const Home = () => {
  const clearall = useClear();
  useEffect(() => {
    clearall();
  }, []);
  const router = useRouter();
  const [sideBarIcon, setSideBarIcon] = useState<boolean>(false);
  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const expRef = useRef(null);
  const pjtRef = useRef(null);
  const {
    menu,
    setMenu,
    setIsMenu,
    sideMenu,
    setSideMenu,
    num1,
    num2,
    smallMenu,
    setSmallMenu,
  } = useStore();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex flex-col  h-auto dark:bg-gray-800 dark:text-white">
        <div ref={baseRef} className="w-full flex-col flex items-center pt-10">
          <Base />
        </div>
        <div
          ref={skillRef}
          className="w-full flex-col flex items-center xl:pt-20 md:pt-16 pt-12"
        >
          <Skills />
        </div>
        <div
          ref={pjtRef}
          className="w-full flex-col flex items-center xl:pt-20 md:pt-16 pt-12"
        >
          <Projects />
        </div>
        <div
          ref={certiRef}
          className="w-full flex-col flex items-center xl:pt-20 md:pt-16 pt-12"
        >
          <Certi />
        </div>
        <div
          ref={expRef}
          className="w-full flex-col flex items-center xl:py-20 md:py-16 py-12"
        >
          <Exp />
        </div>
      </div>
      <div className="fixed top-20 left-0 w-1/6 xl:h-screen flex flex-col xl:justify-between z-30  select-none  dark:text-white">
        <>
          {smallMenu ? (
            <div className="fixed top-12 left-0 z-50 justify-between items-center p-3 flex flex-row w-screen bg-gray-100 dark:bg-gray-700">
              <div className="flex flex-row px-2 md:gap-5 gap-5 md:px-10 md:text-base text-sm">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(baseRef);
                    setSmallMenu(false);
                  }}
                >
                  소개
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(skillRef);
                    setSmallMenu(false);
                  }}
                >
                  SKILLS
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(pjtRef);
                    setSmallMenu(false);
                  }}
                >
                  PROJECTS
                </span>
                <span
                  className="cursor-pointer md:inline hidden"
                  onClick={() => {
                    scrollToSection(certiRef);
                    setSmallMenu(false);
                  }}
                >
                  CERTIFICATES{" "}
                </span>
                <span
                  className="cursor-pointer md:inline hidden"
                  onClick={() => {
                    scrollToSection(expRef);
                    setSmallMenu(false);
                  }}
                >
                  EXPERIENCE{" "}
                </span>
              </div>
              <div className="flex flex-row justify-center">
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => setSmallMenu(false)}
                >
                  close
                </span>
              </div>
            </div>
          ) : null}
          <div className={`h-full 3xl:w-3/4 w-full xl:flex hidden items-start`}>
            <div
              className={`w-full p-7 border border-gray-200 shadow-lg bg-gray-100 transition-opacity duration-5000 ${
                menu
                  ? "animate-fadeInLeft"
                  : num2 === 0
                  ? "opacity-0"
                  : "animate-fadeOutLeft "
              } dark:bg-gray-700 dark:border-none`}
              onMouseEnter={() => setIsMenu(true)}
              onMouseLeave={() => setMenu(false)}
            >
              <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-3">
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
                    onClick={() => scrollToSection(pjtRef)}
                  >
                    PROJECTS
                  </span>
                  <div className="flex flex-col xl:gap-2 xl:px-3 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/divamusic")}
                    >
                      1️⃣ DIVA
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/readit")}
                    >
                      2️⃣ READIT
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/billybully")}
                    >
                      3️⃣ BillyBully
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/gnaak")}
                    >
                      4️⃣ Gnaak's
                    </span>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      <div
        className={`fixed top-0 left-0 w-1/6 xl:h-screen  select-none xl:inline hidden ${
          sideMenu
            ? "z-50"
            : num1 === 0
            ? "opacity-0"
            : "z-40 animate-fadeOutLeft"
        } dark:text-white`}
      >
        <div
          className="flex flex-col xl:justify-between pb-10 3xl:w-3/4 w-full border border-gray-200 bg-gray-100 h-full dark:bg-gray-700 dark:border-none"
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
                onClick={() => setSideMenu(false)}
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
                    onClick={() => scrollToSection(pjtRef)}
                  >
                    PROJECTS
                  </span>
                  <div className="flex flex-col xl:gap-2 xl:px-3 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/divamusic")}
                    >
                      1️⃣ DIVA
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/readit")}
                    >
                      2️⃣ READIT
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/billybully")}
                    >
                      3️⃣ BillyBully
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => router.push("/gnaak")}
                    >
                      4️⃣ Gnaak's
                    </span>
                  </div>
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
