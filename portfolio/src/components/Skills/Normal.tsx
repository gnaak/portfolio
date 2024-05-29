import vue from "@/assets/skills/vue.png";
import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import python from "@/assets/skills/python.png";
import Image from "next/image";

const Normal = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-3">
        <span className="text-xl font-bold">사용 가능</span>
        <div className="skills flex flex-col lg:gap-10 border border-gray-400 bg-gray-100 rounded-xl shadow-xl p-5 dark:bg-gray-700">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white">
                  <Image src={react_query} alt="react_query" className="w-12" />
                </div>
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>React Query를 사용하여</span>
                    <span>비동기 상태 관리를 할 수 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white">
                  <Image src={zustand} alt="zustand" className="" />
                </div>
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>React Query와 함께 사용하여 </span>
                    <span>
                      Client와 Server Data를 분리하여 관리 가능합니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white">
                  <Image src={vue} alt="vue" className="lg:w-16 lg:h-16 " />
                </div>
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>Vuex를 활용해 데이터를 저장하고,</span>
                    <span>이를 적절하게 활용할 수 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl flex justify-center items-center bg-white">
                  <Image
                    src={python}
                    alt="python"
                    className="lg:w-16 lg:h-16 "
                  />
                </div>
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>python의 기본 문법을 이해하고 있고,</span>
                    <span>이를 적절하게 활용할 수 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Normal;
