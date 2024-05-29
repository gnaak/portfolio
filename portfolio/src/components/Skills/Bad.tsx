import jotai from "@/assets/skills/Jotai.png";
import django from "@/assets/skills/django.png";
import sql from "@/assets/skills/sql.png";
import Image from "next/image";

const Bad = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-3">
        <span className="text-xl font-bold">사용 경험</span>
        <div className="skills flex flex-col lg:gap-10 border border-gray-400 bg-gray-200 rounded-xl shadow-xl p-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 bg-white rounded-xl flex items-center justify-center">
                  <Image src={jotai} alt="jotai" className="" />
                </div>
                <div className="flex flex-col justify-between lg:pt-7">
                  <div className="flex flex-col justify-end">
                    <span>Jotai를 사용하여 전역 상태 관리를 했습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl">
                  <Image
                    src={django}
                    alt="django"
                    className="lg:w-16 lg:h-16 "
                  />
                </div>
                <div className="flex flex-col justify-between lg:pt-7">
                  <div className="flex flex-col justify-end">
                    <span>Serializer을 사용해 본 경험이 있습니다. </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row lg:gap-5">
              <div className="lg:w-16 lg:h-16 border border-gray-300 bg-white rounded-xl flex items-center justify-center">
                <Image src={sql} alt="sql" className="" />
              </div>
              <div className="flex flex-col justify-between lg:pt-7">
                <div className="flex flex-col justify-end">
                  <span>sql문을 이용해 간단한 작업을 할 수 있습니다.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bad;
