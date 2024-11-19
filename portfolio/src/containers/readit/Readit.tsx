import readit from "@/assets/projects/readit.png";
import { refType } from "@/types";
import Image from "next/image";
import link from "@/assets/link.png";
import notion from "@/assets/notion.png";

const Readit = ({ baseRef }: refType) => {
  return (
    <>
      <div ref={baseRef} className="flex flex-col gap-2 py-20 pb-10">
        <span className="font-bold text-2xl">Readit</span>
        <span className="w-full border border-gray-200"></span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center xl:py-7 justify-center xl:w-1/3 md:w-1/3 w-full md:justify-start">
          <div className="flex justify-center items-center  bg-[#EEF5FB] border-gray-400 rounded-xl xl:py-7 xl:w-3/4  aspect-4/3 ">
            <Image
              src={readit}
              alt="리딧"
              className="bg-[#] p-3"
              width="256"
              height="256"
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
                  <span>2024.04.08 ~ 2024.05.20 (6주)</span>
                  <span>FE 1명 + BE 5명</span>
                  <span>프론트엔드</span>
                </div>
                <div className="flex flex-col lg:text-base md:text-sm text-xs">
                  <span>✔ ESLint, Prettier 설정</span>
                  <span>✔ 전체 레이아웃 구성</span>
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
              문해력을 키우는 가장 쉬운 방법&nbsp;
              <span className="font-bold ">READIT </span>
            </div>
            <div className="md:flex flex-row items-center gap-1 hidden">
              <div className="flex flex-row gap-1 items-center">
                <Image
                  src={notion}
                  alt="노션"
                  className="w-6 h-6"
                  priority={false}
                />
                <span className="text-blue-600 underline dark:text-white">
                  <a href="https://sulky-cemetery-fa5.notion.site/d5fbd716e70641e895392187e15e5ff7?pvs=4">
                    Link
                  </a>
                </span>
              </div>
              <div className="flex flex-row gap- items-center">
                <Image
                  src={link}
                  alt="깃허브"
                  className="w-8 h-8"
                  priority={false}
                />
                <span className="text-blue-600 underline dark:text-white">
                  <a href="https://github.com/gnaak/readit">Link</a>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
            <div className="flex flex-row xl:gap-5 gap-3">
              📚
              <div className="">
                <span className="font-bold">뉴스, 비문학&nbsp;</span>읽기 요약을
                통해&nbsp; <span className="font-bold">문해력 향상</span>에
                도움을 주는 서비스입니다. 챌린지를 통해 본인의 실력을 확인하고,
                커뮤니티를 통해 구성원과 함께 문해력을 향상할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readit;
