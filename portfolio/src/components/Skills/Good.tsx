import javascript from "@/assets/skills/js.png";
import typescript from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import next from "@/assets/skills/next.png";
import Image from "next/image";

const Good = () => {
  return (
    <>
      <div className="flex flex-col md:gap-3 gap-2">
        <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
          활용 가능
        </span>
        <div className="skills flex flex-row flex-wrap md:gap-3 xl:gap-5 border md:border-gray-400 rounded-xl md:shadow-xl shadow-md md:p-5 p-2 md:justify-none justify-evenly">
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <Image
              src={javascript}
              alt="js"
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 h-10 w-10 rounded-xl"
            />
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              ES6 자바스크립트 문법을 사용합니다. 바닐라 자바스크립트를 보고
              이해할 수 있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <Image
              src={typescript}
              alt="js"
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 h-10 w-10 rounded-xl"
            />
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              Typescript 문법에 익숙합니다. 정적 타입 검사를 이해하고 활용할 수
              있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <Image
              src={react}
              alt="js"
              className="xl:w-16 xl:h-16 md:w-12 md:h-12 h-10 w-10 rounded-xl"
            />
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              Lifecycle을 이해하고 있습니다. 다이나믹 라우터를 구성할 수
              있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={next} alt="next" className="xl:w-16 xl:h-16 " />
            </div>
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              서버사이드렌더링의 개념을 숙지하고, 이를 적용할 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Good;
