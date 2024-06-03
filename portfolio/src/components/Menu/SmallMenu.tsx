"use client";
import useStore from "@/store";
import { usePathname, useRouter } from "next/navigation";
import { refType } from "@/types";

const SmallMenu = ({
  baseRef,
  skillRef,
  pjtRef,
  certiRef,
  expRef,
}: refType) => {
  const { smallMenu, setSmallMenu } = useStore();
  const path = usePathname();
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {smallMenu ? (
        <div className="fixed top-12 left-0 z-50 justify-between items-center p-3 flex flex-row w-screen bg-gray-100 dark:bg-gray-700">
          <div className="flex flex-row px-2 md:gap-5 gap-5 md:px-10 md:text-base text-sm">
            <span
              className="cursor-pointer"
              onClick={() => {
                scrollToSection(baseRef!);
                setSmallMenu(false);
              }}
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
              <span
                className="cursor-pointer"
                onClick={() => {
                  scrollToSection(pjtRef!);
                  setSmallMenu(false);
                }}
              >
                PROJECTS
              </span>
            ) : null}
            <span
              className="cursor-pointer"
              onClick={() => {
                scrollToSection(certiRef!);
                setSmallMenu(false);
              }}
            >
              {path === "/" ? (
                <>CERTIFICATES</>
              ) : path === "/gnaak" ? (
                <>진행 상황</>
              ) : (
                <>기여 사항</>
              )}
            </span>
            {path === "/gnaak" ? null : (
              <span
                className="cursor-pointer md:inline hidden"
                onClick={() => {
                  scrollToSection(expRef!);
                  setSmallMenu(false);
                }}
              >
                {path === "/" ? <>EXPERIENCE</> : <>트러블 슈팅</>}
              </span>
            )}
            {path === "/" ? null : (
              <span
                className="cursor-pointer md:inline hidden"
                onClick={() => {
                  scrollToSection(expRef!);
                  setSmallMenu(false);
                }}
              >
                <>회고</>
              </span>
            )}
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
    </>
  );
};

export default SmallMenu;
