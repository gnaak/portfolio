import Diva from "./Diva";
import Readit from "./ReadIt";
import BillyBully from "./BillyBully";
import Gnaak from "./Gnaak";

const Projects = () => {
  return (
    <>
      <div className="lg:w-3/5 xl:px-20 w-4/5">
        <div className="flex flex-col lg:gap-10 gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-bold 2xl:text-2xl lg:text-xl">PROJECTS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex xl:flex-row flex-col justify-between gap-3 flex-wrap">
            <Diva />
            <Readit />
            <BillyBully />
            <Gnaak/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
