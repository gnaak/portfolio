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
      <div className="lg:w-3/5 xl:px-20 w-4/5">
        <div className="flex flex-col lg:gap-10 gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-bold 2xl:text-2xl lg:text-xl">PROJECTS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex xl:flex-row flex-col justify-start xl:gap-5 gap-5 flex-wrap">
            <Diva />
            <Readit />
            <BillyBully />

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
