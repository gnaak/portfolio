"use client";

import diva from "@/assets/projects/DIVA.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Diva = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col justify-between xl:w-[32%] md:w-[48%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-7 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/divamusic")}
      >
        <Image
          src={diva}
          alt="디바"
          className="w-20 h-20 bg-[#080D44] rounded-xl "
        />
        <div className="flex flex-col lg:gap-5 justify-between">
          <div className="flex jus">
            <span className="font-bold lg:text-lg">DIVA</span>
          </div>
          <div className="flex flex-col lg:gap-2">
            <span className="font-bold">SSAFY 공통PJT 최우수상 (1등)</span>
            <div className="">
음역 기반 음악 추천 및 연습 서비스
            </div>
            <div className="flex flex-row lg:gap-2">
              <span className="bg-[#3179c6] px-2 text-white border border-black rounded-md">
                Typescript
              </span>
              <span className="bg-[#000000] px-2 text-white border border-black rounded-md">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diva;
