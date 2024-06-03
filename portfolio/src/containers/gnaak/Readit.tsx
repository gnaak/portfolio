import gnaak from "@/assets/projects/skawkaks.png";
import { refType } from "@/types";
import Image from "next/image";
import link from "@/assets/link.png";

const Readit = ({ baseRef }: refType) => {
  return (
    <>
      <div ref={baseRef} className="flex flex-col gap-2 py-20 pb-10">
        <span className="font-bold text-2xl">Gnaak's</span>
        <span className="w-full border border-gray-200"></span>
      </div>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col items-center xl:py-7 justify-center xl:w-1/3 md:w-1/3 w-full md:justify-start">
          <div className="flex justify-center items-center border bg-white border-gray-200 rounded-xl xl:py-7 xl:w-3/4 aspect-4/3 ">
            <Image
              src={gnaak}
              alt="billybully"
              className="bg-[#] p-3 w-1/2"
              priority={true}
            />
          </div>
        </div>
        <div className="xl:w-2/3 xl:py-7 md:flex items-center justify-center hidden ">
          <div className="xl:w-2/3 xl:flex flex-col xl:gap-1">
            <div className="flex flex-row xl:h-2/3 justify-start items- xl:gap-5 gap-3">
              <div className="flex flex-col xl:h-2/3 xl:text-lg items-start md:text-base text-sm">
                <span className="font-bold">[기간]</span>
                <span className="font-bold">[팀원]</span>
                <span className="font-bold">[담당]</span>
              </div>
              <div className="flex flex-col xl:h-2/3 justify-center xl:text-lg items-start md:text-base text-sm">
                <div className="flex flex-col">
                  <span>2024.05.27 ~ 2024.06.01 (1차 배포)</span>
                  <span>FE 1명</span>
                  <span>프론트엔드</span>
                </div>
                <div className="flex flex-col lg:text-base md:text-sm text-xs">
                  <span>✔ Vercel 배포</span>
                  <span>✔ 웹 최적화</span>
                  <span>✔ 전체 페이지</span>
                  <span>✔ 전역 상태 관리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-5 gap-3 xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold text-xl">소개</span>
        <div className="flex flex-col xl:gap-3 gap-2 ">
          <div className="flex flex-row justify-between items-center">
            <div className="md:text-base text-sm">
              Next.js를 이용한 포트폴리오 제작&nbsp;
            </div>
            <div className="md:flex flex-row items-center gap-1 hidden">
              <div className="flex flex-row gap- items-center">
                <Image
                  src={link}
                  alt="깃허브"
                  className="w-8 h-8"
                  priority={false}
                />
                <span className="text-blue-600 underline dark:text-white">
                  <a href="https://github.com/gnaak/portfolio">Link</a>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
            <div className="flex flex-row xl:gap-5 gap-3">
              ⏰
              <div className="">
                Next.js를 이용한 포트폴리오 사이트 제작 및 배포와, 팀 단위
                프로젝트를 진행하면서 시간이 부족해 진행하지 못했던 코드
                리팩토링, 웹 최적화를 위한 프로젝트
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readit;
