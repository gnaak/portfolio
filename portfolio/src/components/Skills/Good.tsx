import javascript from "@/assets/skills/js.png";
import typescript from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import next from "@/assets/skills/next.png";
import Image from "next/image";

const Good = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-3">
        <span className="text-xl font-bold">활용 가능</span>
        <div className="skills flex flex-col lg:gap-10 border border-gray-400 rounded-xl shadow-xl p-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5  w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <Image
                  src={javascript}
                  alt="js"
                  className="lg:w-16 lg:h-16 rounded-xl"
                />
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>ES6 자바스크립트 문법을 사용합니다.</span>
                    <span>바닐라 자바스크립트를 보고 이해할 수 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <Image
                  src={typescript}
                  alt="js"
                  className="lg:w-16 lg:h-16 rounded-xl"
                />
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>Typescript 문법에 익숙합니다.</span>
                    <span>정적 타입 검사를 이해하고 활용할 수 있습니다. </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5  w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <Image
                  src={react}
                  alt="js"
                  className="lg:w-16 lg:h-16 rounded-xl"
                />
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>Lifecycle을 이해하고 있습니다.</span>
                    <span>다이나믹 라우터를 구성할 수 있습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-[48%]">
              <div className="flex flex-row lg:gap-5">
                <div className="lg:w-16 lg:h-16 border border-gray-300 rounded-xl">
                  <Image src={next} alt="next" className="lg:w-16 lg:h-16 " />
                </div>
                <div className="flex flex-col justify-between lg:pt-3">
                  <div className="flex flex-col justify-end">
                    <span>ServerSideRendering의 개념을 숙지하고 있고,</span>
                    <span>이를 적용할 수 있습니다.</span>
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

export default Good;
