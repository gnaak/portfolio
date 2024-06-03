import diva from "@/assets/projects/DIVA.png";
import { refType } from "@/types";
import Image from "next/image";
import link from "@/assets/link.png";
import notion from "@/assets/notion.png";

const Diva = ({ baseRef }:refType) => {
  return (
    <>
      <div ref={baseRef} className="flex flex-col gap-2 py-20 pb-10">
        <span className="font-bold text-2xl">DIVA</span>
        <span className="w-full border border-gray-200"></span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center xl:py-7 justify-center xl:w-1/3 md:w-1/3 w-full md:justify-start">
          <Image
            src={diva}
            alt="디바"
            className="bg-[#080D44] rounded-xl border dark:border-none"
            width="256"
            height="256"
            priority={true}
          />
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
                  <span>2024.01.03 ~ 2024.02.16 (6주)</span>
                  <span>FE 3명 + BE 3명</span>
                  <span>프론트엔드</span>
                </div>
                <div className="flex flex-col lg:text-base md:text-sm text-xs">
                  <span>✔ ESLint, Prettier 설정</span>
                  <span>✔ 전체 레이아웃 구성</span>
                  <span>✔ 음역대 측정 페이지</span>
                  <span>✔ 마이 페이지</span>
                  <span>✔ 전역 상태 관리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-5 gap-3 xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold md:text-xl">소개</span>
        <div className="flex flex-col xl:gap-3 gap-2">
          <div className="flex flex-row justify-between items-center">
            <span className="md:text-base text-sm">
              사용자 음역 분석 기반 음악 추천 및 연습 서비스
            </span>
            <div className="md:flex flex-row items-center gap-1 hidden">
              <div className="flex flex-row gap-1 items-center">
                <Image
                  src={notion}
                  alt="노션"
                  className="w-6 h-6"
                  priority={false}
                />
                <span className="text-blue-600 underline dark:text-white">
                  <a href="https://www.notion.so/gnaak/DIV-5bd95f42940742ef85f5fc0464e55a72">
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
                  <a href="https://github.com/gnaak/divamusic">Link</a>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
            <div className="flex flex-row xl:gap-5 gap-3">
              🎤
              <div className="">
                <span className="font-bold">디바</span>는 노래를 좋아하는
                사람들이
                <span className="font-bold">
                  &nbsp;자신의 음역대에 맞는 노래를 찾고, 꾸준한 연습
                </span>
                을 통해
                <span className="font-bold">&nbsp;더욱 나은 가창력</span>을
                발휘할 수 있도록 도와주는 서비스입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diva;
