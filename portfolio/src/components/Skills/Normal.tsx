import vue from "@/assets/skills/vue.png";
import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import python from "@/assets/skills/python.png";
import Image from "next/image";

const Normal = () => {
  return (
    <>
      <div className="flex flex-col md:gap-3 gap-2">
        <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
          사용 가능
        </span>
        <div className="skills flex flex-row flex-wrap md:gap-3 xl:gap-5 border md:border-gray-400 rounded-xl md:shadow-xl shadow-md md:p-5 p-2 md:justify-none justify-evenly">
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={react_query} alt="react_query" className="w-12" />
            </div>
            <span className="lg:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              React Query를 사용하여 비동기 상태 관리를 할 수 있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={zustand} alt="zustand" className="" />
            </div>
            <span className="lg:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              React Query와 함께 사용하여 Client와 Server Data를 분리하여 관리
              가능합니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image
                src={vue}
                alt="vue"
                className="lg:w-16 lg:h-16 object-contain"
              />
            </div>
            <span className="lg:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              Vuex를 활용해 데이터를 저장하고, 이를 적절하게 활용할 수 있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={python} alt="python" className="lg:w-16 lg:h-16 " />
            </div>
            <span className="lg:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              python의 기본 문법을 이해하고 있고, 이를 적절하게 활용할 수
              있습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Normal;
