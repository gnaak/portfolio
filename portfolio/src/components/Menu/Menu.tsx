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
  asRef,
}: refType) => {
  const router = useRouter();
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
                className="cursor-pointer"
                onClick={() => scrollToSection(certiRef!)}
              >
                {path === "/" ? (
                  <>CERTIFICATES</>
                ) : path === "/gnaak" ? (
                  <>진행 상황</>
                ) : (
                  <>기여 사항</>
                )}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => scrollToSection(expRef!)}
              >
                {path === "/" ? (
                  <>EXPERIENCE</>
                ) : path === "/gnaak" ? null : (
                  <>트러블 슈팅</>
                )}
              </span>
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
