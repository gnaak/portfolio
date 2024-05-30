"use client";
import next from "@/assets/skills/next.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import jotai from "@/assets/skills/Jotai.png";
import tailwind from "@/assets/tailwind.png";
import landing from "@/assets/projects/landing.gif";
import home from "@/assets/projects/home.gif";
import rangecheck from "@/assets/projects/rangecheck.gif";
import mypage from "@/assets/projects/mypage.gif";
import As from "./As";
import Image from "next/image";
import profile from "@/assets/projects/skawkaks.png";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Intro from "./Intro";
import Diva from "./Diva";

const Divamusic = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [isMenu, setMenu] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [sideBarIcon, setSideBarIcon] = useState<boolean>(false);
  const divRef = useRef(null);
  const introRef = useRef(null);
  const techRef = useRef(null);
  const myRef = useRef(null);
  const carrouselRef = useRef(null);
  const WebAudioAPIRef = useRef(null);
  const JotaiRef = useRef(null);
  const troubleRef = useRef(null);
  const asRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheck = () => {
    setTimeout(() => {
      if (!isMenu) {
        setOpen(false);
      }
    }, 2000);
  };
  return (
    <>
      <div className="relative flex-col w-full h-screen flex items-center overflow-hidden select-none  dark:bg-gray-800 dark:text-white">
        <div className="xl:w-full flex justify-center overflow-auto">
          <div className="w-3/5">
            <div
              ref={divRef}
              className="flex flex-col gap-2 xl:px-10 py-20 pb-10"
            >
              <span className="font-bold text-2xl">DIV★</span>
              <span className="w-full border border-gray-200"></span>
            </div>
            <div className="flex flex-col gap-10 pb-20">
              <Diva />
              <div className="flex flex-col xl:px-10 md:gap-16 gap-10">
                <div
                  ref={introRef}
                  className="flex flex-col lg:gap-5 gap-3 xl:pt-10"
                >
                  <Intro />
                </div>
                <div ref={techRef} className="flex flex-col gap-5 xl:pt-10">
                  <span className="font-bold md:text-xl">사용 기술</span>

                  <div className="flex flex-row md:gap-20 gap-3 flex-wrap md:flex-nowrap">
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
                      <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                        <Image src={jotai} alt="jotai" className="" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="lg:text-lg font-bold md:inline hidden">
                        스타일링
                      </span>
                      <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                        <Image src={tailwind} alt="tailwind" className="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div ref={myRef} className="flex flex-col xl:pt-10">
                  <span className="font-bold md:text-xl">기여 사항</span>
                  <div>
                    <div
                      ref={carrouselRef}
                      className="flex flex-col gap-3 lg:pt-10 pt-5"
                    >
                      <span className="font-bold md:text-base text-sm">
                        1️⃣ 캐러셀
                      </span>
                      <span className="md:text-base text-sm">
                        캐러셀 자체 커스터마이징 진행
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          🐫
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row">
                              <span>
                                캐러셀 구현”만”을 위한 라이브러리 사용 시 필요한
                                기능에 비해 너무 과도한 리소스를 차지하게 되고,
                                서비스 성능에 부정적인 영향을 미칠 수 있다고
                                판단하여 외부 라이브러리를 사용하지 않고 개발을
                                진행했습니다.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly border md:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image
                          src={landing}
                          alt="랜딩 페이지"
                          className="w-auto h-auto md:inline hidden"
                        />
                        <Image
                          src={home}
                          alt="홈 페이지"
                          className="w-auto h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      ref={WebAudioAPIRef}
                      className="flex flex-col gap-3 pt-10"
                    >
                      <span className="font-bold md:text-base text-sm">
                        2️⃣ Web Audio API
                      </span>
                      <span className="md:text-base text-sm">
                        기기를 통해 입력된 오디오 소스를 실시간 분석 및 시각화
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          🎵
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row">
                              <span>
                                사용자의 음성이 마이크를 통해 입력되면,
                                실시간으로 분석기를 사용해 음역대를 주파수로
                                변환하고, Pitch.js에서 제공하는 알고리즘 로직을
                                활용하여 사용자들에게 더 친숙한 헤르츠(Hz)로
                                제공했습니다.
                                <br />
                                <br />
                                음역대 테스트 신뢰도 향상을 위해 신뢰 구간 95%로
                                이상값을 제거한 테스트 결과를 옥타브로 표기 변환
                                후 음역대 정보를 제공했습니다.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly border md:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
                        <Image
                          src={rangecheck}
                          alt="음역대 테스트"
                          className="w-auto h-auto"
                        />
                        <Image
                          src={mypage}
                          alt="마이 페이지"
                          className="w-auto h-auto md:inline hidden"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div ref={JotaiRef} className="flex flex-col gap-3 pt-10">
                      <span className="font-bold md:text-base text-sm">
                        3️⃣ Jotai
                      </span>
                      <span className="md:text-base text-sm">
                        메인 페이지에 라우팅 되었을 때, 하나의 페이지에서
                        렌더링되어야 하는 컴포넌트가 달라질 수 있어 전역으로
                        상태 관리를 진행했습니다.
                      </span>
                      <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                        <div className="flex flex-row xl:gap-5 gap-3">
                          📢
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row">
                              <span>
                                사용자의 음역대를 바탕으로 맞춤형 노래를
                                추천해주고, 이에 따라 연습모드 / 실전모드로
                                접속이 가능해야 했습니다. 동적 라우팅을 사용하게
                                되면, 본인의 음역대에 아닌 노래에도 접속이
                                가능해지고, UX를 저하시킨다고 판단하여 하나의
                                페이지에 모드에 따라 다른 컴포넌트가
                                렌더링되도록 구현했습니다.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={troubleRef} className="md:flex flex-col gap-5  xl:pt-10 hidden">
                  <span className="font-bold md:text-xl">트러블 슈팅</span>

                  <div className="flex flex-col xl:gap-3">
                    <div className="bg-[#F1F1EF] p-4 flex rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
                      <div className="flex flex-row xl:gap-5 gap-3">
                        ⚠
                        <div className="flex flex-col w-full">
                          <div className="flex flex-row">
                            <span className="whitespace-pre-wrap ">
                              사용자의 음성 분석 시 Hz 값을 배열에 담아서 95%
                              신뢰 구간 중 최저음, 최고음만 DB에 보냈습니다.
                              사용자의 음성에 따라 배열에 계속 추가되는데,
                              프론트 단에서 배열을 가지고 있다 보니 1분이
                              넘어가면 서버가 느려지는 문제가 생겼습니다.
                              <br />
                              <br />
                              사용자에게 실시간으로 음역을 보여주기만 하면
                              시각화 후 값을 저장하지 않아도 됐겠지만, 최저음,
                              최고음을 기준으로 노래를 추천해주는 서비스를
                              기획했기 때문에 배열에 저장할 수 밖에 없었습니다.
                              <br />
                              <br />
                              배열 인덱스, 혹은 특정 시간마다 POST 요청을 보내는
                              방식을 택할 수도 있었지만, 네트워크 트래픽과 서버
                              부하를 고려하여 음역대 테스트 시간을 20초로 줄이는
                              방식을 택했습니다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={asRef} className="flex flex-col gap-5  xl:py-10">
                  <As />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="absolute top-0 left-0 w-1/6 xl:h-screen flex flex-col xl:justify-between z-30 pb-10 select-none  dark:text-white">
        <div className="flex flex-row xl:gap-5 gap-3 p-3 ">
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
          <div className="flex flex-row gap-2">
            <span onClick={() => router.push("/")} className="cursor-pointer">
              HOME
            </span>
            /<span className="cursor-pointer">DIV★</span>
          </div>
        </div>
        <>
          <div className={`h-full 3xl:w-3/4 w-full xl:flex items-start hidden `}>
            <div
              className={`w-full p-7 border border-gray-200 shadow-lg bg-gray-100 transition-opacity duration-5000 ${
                open ? "animate-fadeInLeft" : "animate-fadeOutLeft"
              } dark:bg-gray-700 dark:border-none`}
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => {
                setOpen(false);
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
                    DIV★
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
                      onClick={() => scrollToSection(carrouselRef)}
                    >
                      1️⃣ 캐러셀
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(WebAudioAPIRef)}
                    >
                      2️⃣ Web Audio API
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(JotaiRef)}
                    >
                      3️⃣ Jotai
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
        </>
      </div>

      <div
        className={`absolute top-0 left-0 w-1/6 xl:h-screen z-50 select-none xl:inline hidden ${
          sideBar ? "" : "animate-fadeOutLeft"
        }  dark:text-white `}
      >
        <div
          className="flex flex-col xl:justify-between pb-10 3xl:w-3/4 w-full border border-gray-200 bg-gray-100 h-full dark:bg-gray-700 dark:border-none"
          onMouseEnter={() => setSideBarIcon(true)}
          onMouseLeave={() => setSideBarIcon(false)}
        >
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between gap-5 p-3">
              <div className="flex flex-row gap-3">
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
              className={`w-full p-7 transition-opacity
              }`}
            >
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <span
                    className="cursor-pointer"
                    onClick={() => scrollToSection(divRef)}
                  >
                    DIV★
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
                      onClick={() => scrollToSection(carrouselRef)}
                    >
                      1️⃣ 캐러셀
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(WebAudioAPIRef)}
                    >
                      2️⃣ Web Audio API
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(JotaiRef)}
                    >
                      3️⃣ Jotai
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

export default Divamusic;
