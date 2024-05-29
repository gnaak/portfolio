"use client";
import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import tailwind from "@/assets/tailwind.png";
import viewer from "@/assets/projects/viewer.png";
import infinitequery from "@/assets/projects/infinitequery.png";
import chart from "@/assets/projects/chart.png";
import commu from "@/assets/projects/commu.png";
import As from "./As";
import Image from "next/image";
import profile from "@/assets/projects/skawkaks.png";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Intro from "./Intro";
import Readit from "./Readit";

const divamusic = () => {
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
      if (isMenu) return;
      else setOpen(false);
    }, 1000);
  };
  return (
    <>
      <div className="relative flex-col w-full h-screen flex items-center overflow-hidden select-none ">
        <div className="xl:w-full flex justify-center overflow-auto">
          <div className="xl:w-3/5">
            <div
              ref={divRef}
              className="flex flex-col gap-2 xl:px-10 xl:py-20 xl:pb-10"
            >
              <span className="font-bold xl:text-2xl">Readit</span>
              <span className="w-full border border-gray-200"></span>
            </div>
            <div className="flex flex-col xl:gap-10 xl:pb-20">
              <Readit />
              <div className="flex flex-col xl:px-10 xl:gap-16">
                <div ref={introRef} className="flex flex-col xl:gap-5 xl:pt-10">
                  <Intro />
                </div>
                <div ref={techRef} className="flex flex-col xl:gap-5 xl:pt-10">
                  <span className="font-bold text-xl">사용 기술</span>

                  <div className="flex flex-row xl:gap-20">
                    <div className="flex flex-col xl:gap-3">
                      <span className="text-lg font-bold">
                        프레임워크 & 언어
                      </span>
                      <div className="flex flex-row xl:gap-2">
                        <Image
                          src={react}
                          alt="react"
                          className="w-16 h-16 rounded-xl"
                        />

                        <Image
                          src={ts}
                          alt="ts"
                          className="w-16 h-16 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col xl:gap-3">
                      <span className="text-lg font-bold">상태 관리</span>
                      <div className="flex flex-row xl:gap-2">
                        <div className="w-16 h-16 border border-gray-300 rounded-xl items-center justify-center flex">
                          <Image src={zustand} alt="zustand" />
                        </div>
                        <div className="w-16 h-16 border border-gray-300 rounded-xl items-center justify-center flex">
                          <Image src={react_query} alt="react_query" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col xl:gap-3">
                      <span className="text-lg font-bold">스타일링</span>
                      <div className="w-16 h-16 border border-gray-300 rounded-xl flex justify-center items-center">
                        <Image
                          src={tailwind}
                          alt="tailwind"
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div ref={myRef} className="flex flex-col xl:pt-10">
                  <span className="font-bold text-xl">기여 사항</span>
                  <div>
                    <div
                      ref={carrouselRef}
                      className="flex flex-col xl:gap-3 xl:pt-10"
                    >
                      <span className="font-bold">1️⃣ 뷰어 페이지</span>
                      <span>
                        뉴스, 비문학 글을 쉽게 읽고 요약하게 도와주는 뷰어
                        페이지 제작
                      </span>
                      <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
                        <div className="flex flex-row xl:gap-5">
                          📄
                          <div className="flex flex-col w-full">
                            <div className="">
                              <span className="font-bold">
                                형광펜, 볼드체, 메모 기능
                              </span>
                              을 활용하여 독해에 도움을 줄 수 있게
                              구현하였습니다. 사용자가 메모를 작성하고자 했던
                              위치와, 내용을 매칭하는데 도움을 주기 위해
                              onMouseEnter 이벤트를 활용하여 메모를 작성했던
                              위치로 이동하면 메모가 나타납니다.
                              <br />
                              <br /> 임시 저장 후 마이페이지에서 읽던 글 클릭
                              시, 사용자가 기존에 했던 작업들을 모두 확인하고
                              수정할 수 있도록 구현했습니다. <br />
                              <br />글 목록 페이지 이동 외에도 뉴스 링크,
                              커뮤니티 내부, 읽던 글에서 뷰어 페이지로의
                              라우팅이 가능해야 했기에 useNavigate의 state를
                              활용하여 분기 처리 했습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly border border-gray-400 xl:py-7 xl:px-7 rounded-xl shadow-xl">
                        <Image
                          src={viewer}
                          alt="뷰어 페이지 페이지"
                          className="w-auto h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      ref={WebAudioAPIRef}
                      className="flex flex-col xl:gap-3 xl:pt-10"
                    >
                      <span className="font-bold">
                        2️⃣ 글 목록 및 커뮤니티 목록 페이지
                      </span>
                      <span>
                        글 목록과 커뮤니티 목록을 쉽게 검색 할 수 있도록 검색
                        기능 제공
                      </span>
                      <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
                        <div className="flex flex-row xl:gap-5">
                          🔍
                          <div className="flex flex-col w-full">
                            <div className="">
                              크롤링을 사용하여 뉴스 및 비문학 데이터를 가져와
                              데이터의 양이 많기 때문에 React Query의 &nbsp;
                              <span className="font-bold">
                                useInfiniteQueries를 활용하여 무한스크롤을 구현
                              </span>
                              했습니다. 스크롤 위치마다 다른 도메인의 글이
                              나타나는게 아니기 때문에 페이지네이션보다
                              무한스크롤의 방식이 UX 향상에 좋다고 판단했습니다.
                              또한 검색 필터를 활용해서 사용자가 원하는 종류의
                              글을 검색할 수 있도록 구현했습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-evenly border border-gray-400 xl:py-7 xl:px-7 rounded-xl shadow-xl">
                        <Image
                          src={infinitequery}
                          alt="글 & 커뮤니티 페이지 페이지"
                          className="w-auto h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    ref={JotaiRef}
                    className="flex flex-col xl:gap-3 xl:pt-10"
                  >
                    <span className="font-bold">3️⃣ 챌린지 페이지</span>
                    <span>
                      매일 2개의 비문학 문제를 풀고, 그에 따른 점수 제공
                    </span>
                    <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
                      <div className="flex flex-row xl:gap-5">
                        📈
                        <div className="flex flex-col w-full">
                          <div className="">
                            chart.js를 활용해 그래프를 구현하여 사용자들의
                            점수와 본인의 점수를 비교할 수 있습니다.
                            <br />
                            <br />
                            사용자가 챌린지를 진행하지 않은 날이 있는 경우 이전
                            날의 점수를 배열에 포함하여 표기했으며, 처음
                            챌린지를 진행한 경우에도 이전 날들을 기본값인
                            1,000점으로 표기했습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly border border-gray-400 xl:py-7 xl:px-7 rounded-xl shadow-xl">
                      <Image
                        src={chart}
                        alt="챌린지 페이지"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                  <div
                    ref={JotaiRef}
                    className="flex flex-col xl:gap-3 xl:pt-10"
                  >
                    <span className="font-bold">4️⃣ 커뮤니티 페이지</span>
                    <span>
                      함께 글을 읽을 수 있는 커뮤니티에서 구성원이 읽은 글과
                      요약, 채팅 기능
                    </span>
                    <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
                      <div className="flex flex-row xl:gap-5">
                        📈
                        <div className="flex flex-col w-full">
                          <div className="">
                            채팅을 구현하기 위해 커뮤니티에 늦게 가입한 사용자도
                            이전의 채팅 내용을 확인할 수 있게 하기 위해
                            WebSocket 대신&nbsp;
                            <span className="font-bold">Polling</span>
                            방식을 택했습니다.
                            <br />
                            <br />
                            커뮤니티의 목적이 동시간대에 같은 글을 읽는 것이
                            아닌, 글을 읽는데 어느정도 강제성을 주는 것이기
                            때문에 사용자가 항상 접속해 있다고 가정할 수
                            없었습니다. 주기적으로 서버에 요청을 보내기에
                            네트워크에 부하가 발생할 수 있지만, useQuery의
                            캐싱을 통해 요청 수를 줄일 수 있었습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-evenly border border-gray-400 xl:py-7 xl:px-7 rounded-xl shadow-xl">
                      <Image
                        src={commu}
                        alt="커뮤니티 페이지"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div
                  ref={troubleRef}
                  className="flex flex-col xl:gap-5  xl:pt-10"
                >
                  <span className="font-bold text-xl">트러블 슈팅</span>

                  <div className="flex flex-col xl:gap-3">
                    <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
                      <div className="flex flex-row xl:gap-5">
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
                <div ref={asRef} className="flex flex-col xl:gap-5  xl:py-10">
                  <As />
                </div>
              </div>
            </div>
          </div>
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
            <span onClick={() => router.push("/")} className="cursor-pointer">
              HOME
            </span>
            /<span className="cursor-pointer">READIT</span>
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
              className={`w-full xl:p-7 border border-gray-200 shadow-lg bg-gray-100 transition-opacity duration-5000 ${
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
        className={`absolute top-0 left-0 xl:w-1/6 xl:h-screen z-50 select-none ${
          sideBar ? "" : "animate-fadeOutLeft"
        }`}
      >
        <div
          className="flex flex-col xl:justify-between pb-10 w-3/4 border border-gray-200 bg-gray-100 h-full"
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

export default divamusic;
