"use client";

import billybully from "@/assets/projects/BILLYBULLY.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BillyBully = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/billybully");
  }, [router]);

  return (
    <>
      <div
        className="flex xl:flex-col xl:items-start items-center flex-row xl:justify-between xl:w-[22%] w-full xl:aspect-square  border border-gray-400 p-3 gap-5 rounded-xl shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/billybully")}
      >
        <div className="2xl:w-20 2xl:h-20 md:w-16 md:h-16 w-12 h-12 flex justify-center items-center border bg-yellow-200 border-gray-400 rounded-xl shrink-0">
          <Image src={billybully} alt="billybully" />
        </div>
        <div className="flex flex-col lg:gap-5 justify-between  w-full">
          <div className="flex flex-col lg:gap-2">
            <div className="flex flex-row justify-between w-full items-center">
              <span className="font-bold 3xl:text-lg">Billy Bully</span>
              <div className="xl:hidden text-lg font-bold ">+</div>
            </div>
            <span className="font-bold 3xl:text-base md:text-sm text-xs">
              프론트엔드(리드)
            </span>
            <span className="3xl:text-base md:text-sm text-xs">
              청소년들을 위한 경제 보드 게임 서비스
            </span>
          </div>
          <div className="3xl:flex flex-row lg:gap-2 hidden">
            <span className="bg-[#3179c6] px-2 text-white border border-black rounded-md">
              Typescript
            </span>
            <span className="bg-[#61DAFB] px-2 text-white border border-[#619efb] rounded-md">
              React
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BillyBully;
