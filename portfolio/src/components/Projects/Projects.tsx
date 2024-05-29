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
      <div className="lg:w-3/5 lg:px-20">
        <div className="flex flex-col lg:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-bold lg:text-2xl">PROJECTS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <Diva />
            <Readit />
            <BillyBully/>
            <div className="flex flex-col lg:w-[32%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
