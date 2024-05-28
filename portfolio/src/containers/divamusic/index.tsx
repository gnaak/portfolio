import diva from "@/assets/projects/DIVA.png";
import Image from "next/image";
const divamusic = () => {
  return (
    <>
      <div className="relative flex-col w-full h-screen flex items-center lg:gap-20 lg:pt-20">
        <div className="lg:w-3/5 lg:px-20 border h-1/2">
          <div className="flex flex-col gap-2 lg:px-10">
            <span className="font-bold lg:text-2xl">DIV★</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex flex-col lg:gap-10 border">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center lg:py-7 justify-center lg:w-1/3">
                <Image
                  src={diva}
                  alt="디바"
                  className="bg-[#] rounded-xl border"
                  width="256"
                  height="256"
                  priority={true}
                />
              </div>
              <div className="contact lg:w-2/3 lg:py-7 flex items-center justify-center lg:px-10">
                <div className="lg:w-2/3 lg:flex flex-col lg:gap-1">
                  <div className="flex flex-row lg:h-2/3 justify-start items-center lg:gap-5">
                    <div className="flex flex-col lg:h-2/3 justify-center lg:text-lg items-start">
                      <span className="font-bold">[기간]</span>
                      <span className="font-bold">[팀원]</span>
                      <span className="font-bold">[담당]</span>
                    </div>
                    <div className="flex flex-col lg:h-2/3 justify-center lg:text-lg items-start">
                      <span>2024.01.03 ~ 2024.02.16 (6주)</span>
                      <span>FE 3명 + BE 3명</span>
                      <span>프론트엔드</span>
                    </div>
                  </div>
                  <div className="flex flex-col border border-black px-10">
                    <div></div>
                    <span>ESLint, Prettier 설정</span>
                    <span>전체 레이아웃 구성</span>
                    음역대 측정 페이지
                    <span> 음역대 측정 페이지</span>
                    <span>마이 페이지</span>
                    <span>전역 상태 관리</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between flex-wrap"></div>
        </div>
      </div>
    </>
  );
};

export default divamusic;
