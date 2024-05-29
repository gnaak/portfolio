"use client";

import billybully from "@/assets/projects/BILLYBULLY.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BillyBully = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col justify-between lg:w-[32%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-7 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/billybully")}
      >
        <div className="w-20 h-20 flex justify-center items-center border bg-yellow-100 border-gray-400 rounded-xl ">
          <Image
            src={billybully}
            alt="billybully"
            className="w-full aspect-auto"
          />
        </div>
        <div className="flex flex-col lg:gap-5 justify-between">
          <div className="flex jus">
            <span className="font-bold lg:text-lg">Billy Bully</span>
          </div>
          <div className="flex flex-col lg:gap-2">
            <span className="font-bold">프론트엔드(리드)</span>
            <div className="">
              경제 보드 게임 서비스
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
export default BillyBully;
