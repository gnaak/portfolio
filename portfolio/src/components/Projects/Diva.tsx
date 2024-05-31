"use client";

import diva from "@/assets/projects/DIVA.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Diva = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex xl:flex-col xl:items-start items-center flex-row xl:justify-between xl:w-[24%] w-full xl:aspect-square  border border-gray-400 p-3 gap-5 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/divamusic")}
      >
        <Image
          src={diva}
          alt="디바"
          className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 h-12 w-12 bg-[#080D44] rounded-xl aspect-4/3 "
        />
        <div className="flex flex-col lg:gap-5 justify-between">
          <div className="flex flex-col lg:gap-2">
            <span className="font-bold 3xl:text-lg">DIVA</span>
            <span className="font-bold 3xl:text-base md:text-sm text-xs">
              SSAFY 공통PJT 최우수상
            </span>
            <span className="3xl:text-base md:text-sm text-xs">
              사용자 음역대 기반 음악 추천 및 연습 서비스
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
export default Diva;
