import javascript from "@/assets/skills/js.png";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <div className="lg:w-3/5 lg:px-20 lg:p-5">
        <div className="flex flex-col lg:px-5 lg:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-bold lg:text-3xl">SKILLS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="skills flex flex-col">
            <div className="flex flex-row gap-5">
              <div className="flex flex-row lg:w-3/5 border border-black gap-5">
                <Image
                  src={javascript}
                  alt="js"
                  className="lg:w-16 lg:h-16 rounded-xl"
                />
                <div className="flex flex-col justify-between lg:pt-3">

                  <div className="flex flex-col gap-0">
                    <span>ES6 자바스크립트 문법을 사용합니다.</span>
                    <span>바닐라 자바스크립트를 보고 이해할 수 있습니다.</span>
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

export default Skills;
