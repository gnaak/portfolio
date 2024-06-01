/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import zustand from "@/assets/skills/zustand.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import next from "@/assets/skills/next.png";
import tailwind from "@/assets/tailwind.png";
import mainpage from "@/assets/projects/mainpage.png";
import project from "@/assets/projects/project.png";
import mobile1 from "@/assets/projects/mobile1.png";
import mobile2 from "@/assets/projects/mobile2.png";
import desktop from "@/assets/projects/desktop.png";
import As from "./As";
import Image from "next/image";
import profile from "@/assets/projects/skawkaks.png";
import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Readit from "./Readit";
import useStore from "@/store";

const Gnaak = () => {
  const [sideBarIcon, setSideBarIcon] = useState<boolean>(false);
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
    setNum1,
    setNum2,
  } = useStore();
  const divRef = useRef(null);
  const introRef = useRef(null);
  const techRef = useRef(null);
  const myRef = useRef(null);
  const viewerRef = useRef(null);
  const infiniteRef = useRef(null);
  const challengRef = useRef(null);
  const commuRef = useRef(null);
  const asRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setNum1(0);
    setNum2(0);
    setMenu(false);
    setIsMenu(false);
    setSideMenu(false);
    setSmallMenu(false);
  }, []);
  return (
    <>
      <div className="relative flex-col w-full h-screen flex items-center overflow-hidden select-none  dark:bg-gray-800 dark:text-white">
        <div className="xl:w-full flex justify-center overflow-auto">
          <div className="lg:w-3/5 w-4/5">
            <div
              ref={divRef}
              className="flex flex-col gap-2 xl:px-10 py-20 pb-10"
            >
              <span className="font-bold text-2xl">Gnaak's</span>
              <span className="w-full border border-gray-200"></span>
            </div>
            <div className="flex flex-col pb-20 ">
              <Readit />
              <div className="flex flex-col xl:px-10">
                <div
                  ref={introRef}
                  className="flex flex-col lg:gap-5 gap-3 xl:pt-20 md:pt-16 pt-12"
                >
                  <Intro />
                </div>
                <div
                  ref={techRef}
                  className="flex flex-col lg:gap-5 gap-3 xl:pt-20 md:pt-16 pt-12"
                >
                  <span className="font-bold md:text-xl">사용 기술</span>
                  <div className="flex flex-row lg:gap-20 md:gap-10 gap-3 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-3">
                      <span className="lg:text-lg font-bold md:inline hidden">
                        프레임워크 & 언어
                      </span>
                      <div className="flex flex-row gap-2">
                        <Image
                          src={react}
                          alt="react"
                          className="xl:w-16 xl:h-16 md:w-12 md:h-12 h-10 w-10 rounded-xl"
                        />
                        <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                          <Image
                            src={next}
                            alt="next"
                            className="xl:w-16 xl:h-16"
                          />
                        </div>
                        <Image
                          src={ts}
                          alt="ts"
                          className="xl:w-16 xl:h-16 md:w-12 md:h-12 h-10 w-10 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="lg:text-lg font-bold md:inline hidden">
                        상태 관리
                      </span>
                      <div className="flex flex-row gap-2">
                        <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                          <Image src={zustand} alt="zustand" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="lg:text-lg font-bold md:inline hidden">
                        스타일링
                      </span>
                      <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                        <Image src={tailwind} alt="tailwind" className="w-12" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  ref={myRef}
                  className="flex flex-col xl:pt-20 md:pt-16 pt-12"
                >
                  <span className="font-bold md:text-xl">진행 상황</span>
                  <div>
                    <div
                      ref={viewerRef}
                      className="flex flex-col gap-3 lg:pt-12 pt-10"
                    >
                      <span className="font-bold md:text-base text-sm">
                        1️⃣ 메인 페이지
                      </span>
                      <span className="md:text-base text-sm">
                        UX 및 웹 최적화를 고려한 메인 페이지 제작
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          📄
                          <div className="flex flex-col w-full">
                            <div className="">
                              프론트엔드 개발자로 포트폴리오 사이트를 제작이
                              역량을 가장 있는 그대로 보여줄 수 있다고
                              생각했습니다. 다양한 레퍼런스를 참고한 결과 css를
                              이용한 과도한 애니메이션은 오히려 집중을
                              분산시킨다고 생각햇고, 개발자들이 가장 익숙한
                              docs와 노션 중 노션의 UI를 차용하여 제작했습니다.
                              <br />
                              <br />
                              프로젝트 페이지에서 개발했던 프로젝트의 간략한
                              서비스를 제공하여 직접 사용해보게 만들고자
                              사이트를 제작했습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image src={mainpage} alt="메인 페이지" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      ref={infiniteRef}
                      className="flex flex-col gap-3 lg:pt-12 pt-10"
                    >
                      <span className="font-bold md:text-base text-sm">
                        2️⃣ 프로젝트 페이지
                      </span>
                      <span className="md:text-base text-sm">
                        프로젝트의 간략한 소개와 사용 기술, 기여 사항,
                        트러블슈팅, 회고
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          🎈
                          <div className="flex flex-col w-full">
                            <div className="">
                              진행했던 프로젝트들을 다시 한번 정리해보고 회고할
                              수 있는 시간을 가졌습니다. 깃허브에 올라간
                              코드들을 다시 한번 확인하면서 "지금 짠다면 더 좋은
                              코드를 짤 수 있지 않을까?" 라는 생각을 했습니다.
                              <br />
                              <br />
                              프로젝트 중 DIVA의 음역대 측정, BillyBully의
                              주사위, Readit의 뷰어 설명란에 &nbsp;
                              <span className="text-blue-500 dark:text-white underline">
                                더보기
                              </span>
                              를 추가하여 간접적으로 서비스를 체험할 수 있도록
                              준비 중입니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image src={project} alt="프로젝트 페이지" />
                      </div>
                    </div>
                  </div>
                  <div
                    ref={challengRef}
                    className="flex flex-col gap-3 lg:pt-12 pt-10"
                  >
                    <span className="font-bold md:text-base text-sm">
                      3️⃣ UX
                    </span>
                    <span className="md:text-base text-sm">
                      반응형 웹, 다크 모드, 목차
                    </span>
                    <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                      <div className="flex flex-row xl:gap-5 gap-3">
                        📱
                        <div className="flex flex-col w-full">
                          <div className="">
                            320, 640, 1024, 1280, 1440, 1920px을 기준으로
                            사이트를 조금씩 다르게 구성했습니다. 큰 화면에서
                            많은 정보는 필요할 수 있지만, 작은 화면에서 동일한
                            정보를 제공하면 과도하 게 많다고 느낄 수 있다고
                            생각해서 간략한 내용만 담았습니다.
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md shrink-0">
                      <Image src={mobile1} alt="모바일1" />
                      <Image src={mobile2} alt="모바일2" className="md:inline hidden" />
                    </div>
                  </div>
                  <div
                    ref={commuRef}
                    className="flex flex-col gap-3 lg:pt-12 pt-10"
                  >
                    <span className="font-bold md:text-base text-sm">
                      4️⃣ 웹 최적화
                    </span>
                    <span className="md:text-base text-sm">
                      LCP, TBT, CLS를 고려한 웹 최적화 및 코드 리팩토링
                    </span>
                    <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                      <div className="flex flex-row xl:gap-5 gap-3">
                        ⚙
                        <div className="flex flex-col w-full">
                          <div className="">
                            lighthouse로 웹 성능을 측정해가며 불필요한 코드 제거 및 최적화를 진행했습니다. 데스크탑의 경우 좋은 성능을 보였으나, 모바일 화면의 경우 성능이 85까지 내려와 불필요한 코드를 줄이고 컴포넌트 화를 통해 리팩토링 예정입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                      <Image src={desktop} alt="데스크톱" />
                    </div>
                  </div>
                </div>
                <div
                  ref={asRef}
                  className="flex flex-col gap-3 xl:py-20 md:py-16 pt-12"
                >
                  <As />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-20 left-0 w-1/6 xl:h-screen flex flex-col xl:justify-between z-30  select-none  dark:text-white">
        <>
          {smallMenu ? (
            <div className="fixed top-12 left-0 z-50 justify-between items-center p-3 flex flex-row w-screen bg-gray-100 dark:bg-gray-700">
              <div className="flex flex-row px-2 md:gap-5 gap-5 md:px-10 md:text-base text-sm">
                <span
                  className="cursor-pointer flex"
                  onClick={() => {
                    scrollToSection(divRef);
                    setSmallMenu(false);
                  }}
                >
Gnaak's                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(introRef);
                    setSmallMenu(false);
                  }}
                >
                  소개
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(techRef);
                    setSmallMenu(false);
                  }}
                >
                  사용 기술
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(myRef);
                    setSmallMenu(false);
                  }}
                >
진행 상황                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    scrollToSection(asRef);
                    setSmallMenu(false);
                  }}
                >
                  회고
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
              onMouseLeave={() => {
                setMenu(false);
              }}
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
                    onClick={() => scrollToSection(divRef)}
                  >
Gnaak's                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(introRef)}
                  >
                    소개
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(techRef)}
                  >
                    사용 기술
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(myRef)}
                  >
                    진행 상황
                  </span>

                  <div className="flex flex-col xl:gap-2 xl:px-5 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(viewerRef)}
                    >
                      1️⃣ 메인 페이지
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(infiniteRef)}
                    >
                      2️⃣ 프로젝트 페이지
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(challengRef)}
                    >
                      3️⃣ UX
                    </span>{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(commuRef)}
                    >
                      4️⃣ 웹 최적화
                    </span>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(asRef)}
                  >
                    회고
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
            : "z-50 animate-fadeOutLeft"
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
              className={`w-full xl:p-7 transition-opacity
              }`}
            >
              <div className="flex flex-col xl:gap-10">
                <div className="flex flex-col xl:gap-3">
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(divRef)}
                  >
                    READIT
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(introRef)}
                  >
                    소개
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(techRef)}
                  >
                    사용 기술
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(myRef)}
                  >
                    진행 상황
                  </span>

                  <div className="flex flex-col xl:gap-2 xl:px-5 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(viewerRef)}
                    >
                      1️⃣ 메인 페이지
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(infiniteRef)}
                    >
                      2️⃣ 프로젝트 페이지
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(challengRef)}
                    >
                      3️⃣ UX
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(commuRef)}
                    >
                      4️⃣ 웹 최적화 
                    </span>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(asRef)}
                  >
                    회고
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

export default Gnaak;
