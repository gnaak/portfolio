import Bad from "./Bad";
import Good from "./Good";
import Normal from "./Normal";

const Skills = () => {
  return (
    <>
      <div className="lg:w-3/5 lg:px-20">
        <div className="flex flex-col lg:gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-bold lg:text-3xl">SKILLS</span>
            <span className="w-full border border-gray-200"></span>
          </div>
          <div className="flex flex-col lg:gap-10">
            <Good />
            <Normal />
            <Bad/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
