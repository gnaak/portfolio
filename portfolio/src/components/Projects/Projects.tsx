import diva from "@/assets/projects/DIVA.png";
import billy from "@/assets/projects/BILLYBULLY.png";
import readit from "@/assets/projects/skawkaks.png";
import Image from "next/image";
import Diva from "./Diva";
import Readit from "./ReadIt";
import BillyBully from "./BillyBully";

const Projects = () => {
  return (
    <>
      <div className="lg:w-3/5 xl:px-20 md:w-4/5">
        <div className="flex flex-col lg:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-bold 2xl:text-2xl lg:text-xl">PROJECTS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <Diva />
            <Readit />
            <BillyBully />
            <div className="flex flex-col justify-between xl:w-[32%] md:w-[48%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-7 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
