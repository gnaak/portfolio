/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import emotion from "@/assets/emotion.png";
import map from "@/assets/projects/map.png";
import dice from "@/assets/projects/dice.png";
import cards from "@/assets/projects/cards.png";
import As from "./As";
import Image from "next/image";
import profile from "@/assets/projects/skawkaks.png";
import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Readit from "./BillyBully";
import useStore from "@/store";
import useClear from "@/hooks/clear";

const BillyBully = () => {
  const clearall = useClear();
  useEffect(() => {
    clearall();
  }, []);

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
  } = useStore();
  const divRef = useRef(null);
  const introRef = useRef(null);
  const techRef = useRef(null);
  const myRef = useRef(null);
  const viewerRef = useRef(null);
  const infiniteRef = useRef(null);
  const challengRef = useRef(null);
  const troubleRef = useRef(null);
  const asRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex-col w-full h-screen flex items-center overflow-hidden select-none  dark:bg-gray-800 dark:text-white">
        <div className="xl:w-full flex justify-center overflow-auto">
          <div className="lg:w-3/5 w-4/5">
            <div
              ref={divRef}
              className="flex flex-col gap-2 xl:px-10 py-20 pb-10"
            >
              <span className="font-bold text-2xl">Billy Bully</span>
              <span className="w-full border border-gray-200"></span>
            </div>
            <div className="flex flex-col pb-20">
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
                        <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                          <Image
                            src={react_query}
                            alt="react_query"
                            className="w-12"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="lg:text-lg font-bold md:inline hidden">
                        스타일링
                      </span>
                      <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                        <Image src={emotion} alt="emotion" />
                      </div>
                    </div>
                    {/* <div className="flex flex-col xl:gap-3">
                      <span className="text-lg font-bold">기타</span>
                      <div className="w-16 h-16 border border-gray-300 rounded-xl flex justify-center items-center">
                        <Image src={blender} alt="emotion" className="w-12" />
                      </div>
                    </div> */}
                  </div>
                </div>

                <div
                  ref={myRef}
                  className="flex flex-col xl:pt-20 md:pt-16 pt-12"
                >
                  <span className="font-bold md:text-xl">기여 사항</span>
                  <div>
                    <div
                      ref={viewerRef}
                      className="flex flex-col gap-3 lg:pt-12 pt-10"
                    >
                      <span className="font-bold md:text-base text-sm">
                        1️⃣ 맵 & 캐릭터
                      </span>
                      <span className="md:text-base text-sm">
                        3D 모델링을 끝낸 맵과 캐릭터를 three.js를 활용하여
                        렌더링
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          🎮
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row">
                              블렌더를 사용하여 자체 맵을 제작하고, three.js를
                              활용해 맵과 캐릭터 렌더링을 진행했습니다.
                              입체적으로 화면에 보여주기 위해 크기, 카메라 위치
                              등을 조절했습니다.
                              <br />
                              <br />
                              나온 주사위 점수에 맞게 캐릭터 이동 애니메이션과
                              발판을 밟을 때, 발판이 상하로 움직이는
                              애니메이션을 구현했습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image src={map} alt="게임 페이지" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      ref={infiniteRef}
                      className="flex flex-col gap-3 lg:pt-12 pt-10"
                    >
                      <span className="font-bold md:text-base text-sm">
                        2️⃣ 주사위
                      </span>
                      <span className="md:text-base text-sm">
                        three.js를 활용한 주사위 커스터마이징
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          🎲
                          <div className="flex flex-col w-full">
                            <div className="">
                              three.js를 활용하여 주사위를 커스터마이징
                              했습니다. 주사위를 굴렸을 때, 기준점의 각도를
                              기준으로 점수를 계산했습니다.
                              <br />
                              <br />
                              또한 주사위가 굴러가는 효과를 주기 위해서
                              cannon-es를 사용하여 중력을 구현했습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image src={dice} alt="주사위" />
                      </div>
                    </div>
                  </div>
                  <div
                    ref={challengRef}
                    className="flex flex-col gap-3 lg:pt-12 pt-10"
                  >
                    <span className="font-bold md:text-base text-sm">
                      3️⃣ Zustand
                    </span>
                    <span className="md:text-base text-sm">
                      플레이어가 보유한 자산에 영향을 끼칠 수 있는 요소가
                      다양하여 전역 상태로 관리{" "}
                    </span>
                    <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                      <div className="flex flex-row xl:gap-5 gap-3">
                        ⁉
                        <div className="flex flex-col w-full">
                          <div className="">
                            플레이어가 특정 발판에 도달했을 때 액션 4종류와
                            3턴마다 모든 플레이어에 영향을 끼치는 액션이
                            존재했기 때문에 이를 props로 전달하게 되면 추후
                            유지보수가 어렵다고 판단하여 전역으로 상태 관리를
                            진행했습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                      <Image src={cards} alt="카드" />
                    </div>
                  </div>
                </div>
                <div
                  ref={troubleRef}
                  className="md:flex flex-col xl:pt-20 md:pt-16 hidden gap-3"
                >
                  <span className="font-bold md:text-xl">트러블 슈팅</span>

                  <div className="flex flex-col xl:gap-3">
                    <div className="bg-[#F1F1EF] p-4 flex rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                      <div className="flex flex-row xl:gap-5 gap-3">
                        ⚠
                        <div className="flex flex-col w-full">
                          <div className="flex flex-row">
                            <span className="whitespace-pre-wrap ">
                              초기에는 props를 활용하여 데이터를 전달할 수
                              있으면 전역 상태 관리를 최대한 지양하고자
                              했습니다.
                              <br />
                              <br />
                              맵, 캐릭터, 플레이어, 주사위로 컴포넌트를 나누어서
                              관리했는데, 주사위를 굴릴 때마다 해당하는
                              플레이어의 자산, 캐릭터, 그리고 캐릭터가 이동함에
                              따라 맵에도 주사위 점수를 전달해줘야 했습니다.
                              <br />
                              <br />
                              클린 코드가 짧은 코드만을 뜻하는 것은 아니지만,
                              주사위 점수 → 맵, 캐릭터 → 액션 발생 → 플레이터
                              자산 변경으로 이어지는 데이터 전달에서 prop
                              drilling 발생 가능성과 관리의 어려움이 생길 수
                              있다고 판단하여 전역 상태로 관리하게 되었습니다.
                            </span>
                          </div>
                        </div>
                      </div>
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
                  BillyBully
                </span>
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
                  기여 사항
                </span>

                <span
                  className="cursor-pointer md:inline hidden"
                  onClick={() => {
                    scrollToSection(troubleRef);
                    setSmallMenu(false);
                  }}
                >
                  트러블 슈팅
                </span>
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
          <div className={`h-full 3xl:w-3/4 w-5/6 xl:flex hidden items-start`}>
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
                    BillyBully
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
                    기여 사항
                  </span>

                  <div className="flex flex-col xl:gap-2 xl:px-5 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(viewerRef)}
                    >
                      1️⃣ 맵 & 캐릭터
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(infiniteRef)}
                    >
                      2️⃣ 주사위
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(challengRef)}
                    >
                      3️⃣ Zustand
                    </span>{" "}
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(troubleRef)}
                  >
                    트러블 슈팅
                  </span>
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
          className="flex flex-col xl:justify-between pb-10 3xl:w-3/4 w-5/6 border border-gray-200 bg-gray-100 h-full dark:bg-gray-700 dark:border-none"
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
                    BillyBully
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
                    기여 사항
                  </span>

                  <div className="flex flex-col xl:gap-2 xl:px-5 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(viewerRef)}
                    >
                      1️⃣ 맵 & 캐릭터
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(infiniteRef)}
                    >
                      2️⃣ 주사위
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(challengRef)}
                    >
                      3️⃣ Zustand
                    </span>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(troubleRef)}
                  >
                    트러블 슈팅
                  </span>
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

export default BillyBully;
