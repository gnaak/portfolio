import figma from "@/assets/figma.png";
import jira from "@/assets/jira.png";
import github from "@/assets/link.png";
import Image from "next/image";
const Etc = () => {
  return (
    <>
      <div className="flex flex-col md:gap-3 gap-2">
        <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
          협업 툴
        </span>
        <div className="skills flex flex-row flex-wrap md:gap-3 xl:gap-5 border md:border-gray-400  rounded-xl md:shadow-xl shadow-md md:p-5 p-2 md:justify-start justify-evenly">
          <div className="md:w-12 lg:w-16 w-[22%] flex justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={github} alt="github" />
            </div>
          </div>
          <div className="md:w-12 lg:w-16 w-[22%] flex justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={figma} alt="figma" />
            </div>
          </div>
          <div className="md:w-12 lg:w-16 w-[22%] flex justify-center">
            <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={jira} alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Etc;
