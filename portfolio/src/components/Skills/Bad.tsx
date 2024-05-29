import jotai from "@/assets/skills/Jotai.png";
import django from "@/assets/skills/django.png";
import sql from "@/assets/skills/sql.png";
import Image from "next/image";

const Bad = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-3">
        <span className="xl:text-xl lg:text-lg font-bold">사용 경험</span>
        <div className="skills flex flex-col lg:gap-10 border border-gray-400 bg-gray-200 rounded-xl shadow-xl p-5 dark:bg-gray-500">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                  <Image src={jotai} alt="jotai" className="" />
                </div>
                <span className="lg:pt-3 xl:text-base lg:text-sm">
                  Jotai를 사용하여 전역 상태 관리를 했습니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                  <Image
                    src={django}
                    alt="django"
                    className="lg:w-16 lg:h-16 "
                  />
                </div>
                <span className="lg:pt-3 xl:text-base lg:text-sm">
                  Serializer을 사용해 본 경험이 있습니다.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-[48%]">
            <div className="flex flex-row lg:gap-5">
              <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
                <Image src={sql} alt="sql" className="" />
              </div>
              <span className="lg:pt-3 xl:text-base lg:text-sm">
                sql문을 이용해 간단한 작업을 할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bad;
