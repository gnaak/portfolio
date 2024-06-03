import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import emotion from "@/assets/emotion.png";
import { refType } from "@/types";
import Image from "next/image";

const Skills = ({ skillRef }: refType) => {
  return (
    <>
      <div
        ref={skillRef}
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
                <Image src={react_query} alt="react_query" className="w-12" />
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
    </>
  );
};

export default Skills;
