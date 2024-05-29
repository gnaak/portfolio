"use client";

import readit from "@/assets/projects/readit.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Readit = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col justify-between lg:w-[32%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-7 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/readit")}
      >
        <div className="w-20 h-20 flex justify-center items-center border bg-[#EEF5FB] border-gray-400 rounded-xl ">
          <Image src={readit} alt="리딧" className="w-full aspect-auto" />
        </div>
        <div className="flex flex-col lg:gap-5 justify-between">
          <div className="flex jus">
            <span className="font-bold lg:text-lg">Readit.</span>
          </div>
          <div className="flex flex-col lg:gap-2">
            <div className="">
              <span className="font-bold">뉴스, 비문학&nbsp;</span>읽기 요약을
              통해&nbsp; <span className="font-bold">문해력 향상</span>에 도움을
              주는 서비스입니다.
            </div>
            <div className="flex flex-row lg:gap-2">
              <span className="bg-[#3179c6] px-2 text-white border border-black rounded-md">
                Typescript
              </span>
              <span className="bg-[#61DAFB] px-2 text-white border border-[#619efb] rounded-md">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Readit;
