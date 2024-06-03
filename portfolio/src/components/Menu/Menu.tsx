"use client";
import useStore from "@/store";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import profile from "@/assets/projects/skawkaks.png";
import { refType } from "@/types";

const MainMenu = ({
  baseRef,
  skillRef,
  pjtRef,
  certiRef,
  expRef,
  oneRef,
  twoRef,
  threeRef,
  fourRef,
  asRef,
}: refType) => {
  const router = useRouter();
  const { menu, setMenu, setIsMenu, num2, setSmallMenu } = useStore();
  const path = usePathname();
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
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
                onClick={() => scrollToSection(baseRef!)}
              >
                소개
              </span>

              <span
                className="cursor-pointer"
                onClick={() => scrollToSection(skillRef!)}
              >
                {path === "/" ? <>SKILLS</> : <>사용 기술</>}
              </span>

              {path === "/" ? (
                <>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection(pjtRef!);
                      setSmallMenu(false);
                    }}
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
                </>
              ) : null}
              <span
                className="cursor-pointer "
                onClick={() => scrollToSection(certiRef!)}
              >
                {path === "/" ? (
                  <>CERTIFICATES</>
                ) : path === "/gnaak" ? (
                  <>진행 상황</>
                ) : (
                  <>
                    <span>기여 사항</span>
                  </>
                )}
                {path === "/" ? null : (
                  <div className="flex flex-col xl:gap-2 py-2 xl:px-3 text-sm">
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(oneRef!)}
                    >
                      {path === "/divamusic"
                        ? "1️⃣ 캐러셀"
                        : path === "/readit"
                        ? "1️⃣ 뷰어 페이지"
                        : path === "/billybully"
                        ? "1️⃣ 맵 & 캐릭터"
                        : path === "/gnaak"
                        ? "1️⃣ 메인 페이지"
                        : null}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        scrollToSection(twoRef!);
                      }}
                    >
                      {path === "/divamusic"
                        ? "2️⃣ Web Audio API"
                        : path === "/readit"
                        ? "2️⃣ 글 목록"
                        : path === "/billybully"
                        ? "2️⃣ 주사위"
                        : path === "/gnaak"
                        ? "2️⃣ 프로젝트 페이지"
                        : null}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => scrollToSection(threeRef!)}
                    >
                      {path === "/divamusic"
                        ? "3️⃣ Jotai"
                        : path === "/readit"
                        ? "3️⃣ 챌린지 페이지"
                        : path === "/billybully"
                        ? "3️⃣ Zustand"
                        : path === "/gnaak"
                        ? "3️⃣ UX"
                        : null}
                    </span>
                    {path === "/divamusic" || path === '/billybully' ? null : (
                      <span
                        className="cursor-pointer"
                        onClick={() => scrollToSection(fourRef!)}
                      >
                        {path === "/divamusic"
                          ? null
                          : path === "/readit"
                          ? "4️⃣ 커뮤니티"
                          : path === "/billybully"
                          ? null
                          : path === "/gnaak"
                          ? "4️⃣ 웹 최적화"
                          : null}
                      </span>
                    )}
                  </div>
                )}
              </span>
              {path === "/" ? (
                <span
                  className="cursor-pointer"
                  onClick={() => scrollToSection(expRef!)}
                >
                  <>EXPERIENCE</>
                </span>
              ) : path === "/gnaak" ? null : (
                <span
                  className="cursor-pointer"
                  onClick={() => scrollToSection(expRef!)}
                >
                  <>트러블 슈팅</>
                </span>
              )}
              <span
                className="cursor-pointer"
                onClick={() => scrollToSection(asRef!)}
              >
                {path === "/" ? null : <>회고</>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
