import jotai from "@/assets/skills/Jotai.png";
import django from "@/assets/skills/django.png";
import sql from "@/assets/skills/sql.png";
import Image from "next/image";

const Bad = () => {
  return (
    <>
      <div className="flex flex-col md:gap-3 gap-2">
        <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
          사용 경험
        </span>
        <div className="skills flex flex-row flex-wrap md:gap-3 xl:gap-5 border md:border-gray-400 rounded-xl md:shadow-xl shadow-md md:p-5 p-2 md:justify-none justify-evenly">
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] md:justify-start justify-center">
            <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={jotai} alt="jotai" className="" />
            </div>
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              Jotai를 사용하여 전역 상태 관리를 했습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] md:justify-start justify-center">
            <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={django} alt="django" className="" />
            </div>
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              Serializer을 사용해 본 경험이 있습니다.
            </span>
          </div>
          <div className="flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] md:justify-start justify-center">
            <div className="xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={sql} alt="sql" className="" />
            </div>
            <span className="xl:pt-3 xl:text-base lg:text-sm md:text-xs md:inline hidden">
              sql문을 이용해 간단한 작업을 할 수 있습니다.
            </span>
          </div>
          <div className="md:flex flex-row lg:gap-5 md:gap-3 md:w-[48%] w-[22%] justify-center hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Bad;
