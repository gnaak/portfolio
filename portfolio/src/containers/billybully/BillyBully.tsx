import billybully from "@/assets/projects/BILLYBULLY.png";
import Image from "next/image";

const Readit = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col items-center xl:py-7 justify-center xl:w-1/3 md:w-1/2 w-full md:justify-start">
          <div className="flex justify-center items-center  bg-yellow-200 border-gray-400 rounded-xl xl:py-7 xl:w-3/4  aspect-4/3 ">
            <Image
              src={billybully}
              alt="billybully"
              className="bg-[#] p-3"
              width="256"
              height="256"
              priority={true}
            />
          </div>
        </div>
        <div className="xl:w-2/3 xl:py-7 md:flex items-center justify-center xl:px-9 hidden ">
          <div className="xl:w-2/3 xl:flex flex-col xl:gap-1">
            <div className="flex flex-row xl:h-2/3 justify-start items- xl:gap-5 gap-3">
              <div className="flex flex-col xl:h-2/3 xl:text-lg items-start md:text-base text-sm">
                <span className="font-bold">[기간]</span>
                <span className="font-bold">[팀원]</span>
                <span className="font-bold">[담당]</span>
              </div>
              <div className="flex flex-col xl:h-2/3 justify-center xl:text-lg items-start md:text-base text-sm">
                <div className="flex flex-col">
                  <span>2024.02.22 ~ 2024.04.04 (6주)</span>
                  <span>FE 2명 + BE 4명</span>
                  <span>프론트엔드</span>
                </div>
                <div className="flex flex-col lg:text-base md:text-sm text-xs">
                  <span>✔ ESLint, Prettier 설정</span>
                  <span>✔ 전체 레이아웃 구성</span>
                  <span>✔ 게임 페이지</span>
                  <span>✔ 전역 상태 관리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readit;
