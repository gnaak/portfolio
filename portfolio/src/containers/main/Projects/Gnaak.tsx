"use client";

import gnaak from "@/assets/projects/skawkaks.png";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Gnaak = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex xl:flex-col xl:items-start items-center flex-row xl:justify-between xl:w-[22%] w-full xl:aspect-square  border border-gray-400 p-3 gap-5 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/gnaak")}
      >
        <div className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 w-12 h-12 flex justify-center items-center border bg-[#] border-gray-400 rounded-xl shrink-0">
          <Image
            src={gnaak}
            alt="gnaak"
            className="2xl:w-16 2xl:h-16 md:w-12 md:h-12 w-10 h-10"
          />
        </div>

        <div className="flex flex-col lg:gap-5 justify-between  w-full">
          <div className="flex flex-col lg:gap-2">
            <div className="flex flex-row justify-between w-full items-center">
              <span className="font-bold 3xl:text-lg">Gnaak's</span>
              <div className="xl:hidden text-lg font-bold ">+</div>
            </div>
            <span className="font-bold 3xl:text-base md:text-sm text-xs">
1인 프로젝트            </span>
            <span className="3xl:text-base md:text-sm text-xs">
              Next.js를 이용한 포트폴리오 제작 
            </span>
          </div>
          <div className="3xl:flex flex-row lg:gap-2 hidden">
            <span className="bg-[#3179c6] px-2 text-white border border-black rounded-md">
              Typescript
            </span>
            <span className="bg-[#000000] px-2 text-white border border-black rounded-md">
              Next.js
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gnaak;
