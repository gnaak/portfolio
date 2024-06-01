import diva from "@/assets/projects/DIVA.png";
import Image from "next/image";

const Diva = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center xl:py-7 justify-center xl:w-1/3 md:w-1/3 w-full md:justify-start">
          <Image
            src={diva}
            alt="디바"
            className="bg-[#] rounded-xl border dark:border-none"
            width="256"
            height="256"
            priority={true}
          />
        </div>
        <div className="xl:w-2/3 xl:py-7 md:flex items-center justify-center xl:px-10 hidden ">
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
    </>
  );
};

export default Diva;
