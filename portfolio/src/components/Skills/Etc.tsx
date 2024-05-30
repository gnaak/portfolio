import figma from "@/assets/figma.png";
import jira from "@/assets/jira.png";
import github from "@/assets/link.png";
import Image from "next/image";
const Etc = () => {
  return (
    <>
      <div className="flex flex-col lg:gap-3">
        <span className="xl:text-xl lg:text-lg font-bold">협업 툴</span>
        <div className="skills flex flex-row xl:gap-5 border border-gray-400 rounded-xl shadow-xl p-5">
          <div className="flex flex-row lg:gap-5 md:gap-5">
            <div className="lg:w-16 lg:h-16 w-12 h-12 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={github} alt="github" />
            </div>
            <div className="lg:w-16 lg:h-16 w-12 h-12 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={figma} alt="figma" />
            </div>
            <div className="lg:w-16 lg:h-16 w-12 h-12 border border-gray-300 rounded-xl flex justify-center items-center bg-white shrink-0">
              <Image src={jira} alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Etc;
