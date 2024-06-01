import gnaak from "@/assets/projects/skawkaks.png";
import Image from "next/image";

const Readit = () => {
  return (
    <>
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
        <div className="xl:w-2/3 xl:py-7 md:flex items-center justify-center xl:px-8 hidden">
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
    </>
  );
};

export default Readit;
