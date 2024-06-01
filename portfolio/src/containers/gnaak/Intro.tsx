import Image from "next/image";
import link from "@/assets/link.png";
const Intro = () => {
  return (
    <>
      <span className="font-bold text-xl">소개</span>
      <div className="flex flex-col xl:gap-3 gap-2 ">
        <div className="flex flex-row justify-between items-center xl:pr-5">
          <div className="md:text-base text-sm">
            Next.js를 이용한 포트폴리오 제작&nbsp;
          </div>
          <div className="md:flex flex-row items-center gap-1 hidden">
            <div className="flex flex-row gap- items-center">
              <Image
                src={link}
                alt="깃허브"
                className="w-8 h-8"
                priority={false}
              />
              <span className="text-blue-600 underline dark:text-white">
                <a href="https://github.com/gnaak/portfolio">Link</a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
          <div className="flex flex-row xl:gap-5 gap-3">
            ⏰
            <div className="">
              Next.js를 이용한 포트폴리오 사이트 제작 및 배포와, 팀 단위 프로젝트를 진행하면서 시간이 부족해 진행하지 못했던 코드 리팩토링, 웹 최적화를 위한 프로젝트
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
