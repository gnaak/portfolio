import Image from "next/image";
import link from "@/assets/link.png";
import notion from "@/assets/notion.png";

const Intro = () => {
  return (
    <>
      <span className="font-bold text-xl">소개</span>
      <div className="flex flex-col xl:gap-3 gap-2 ">
        <div className="flex flex-row justify-between items-center xl:pr-5">
          <div className="md:text-base text-sm">
            경제를 쉽게! 그리고 빠르게!&nbsp;
            <span className="font-bold ">BillyBully </span>
          </div>
          <div className="md:flex flex-row items-center gap-1 hidden">
            <div className="flex flex-row gap-1 items-center">
              <Image
                src={notion}
                alt="노션"
                className="w-6 h-6"
                priority={false}
              />
              <span className="text-blue-600 underline dark:text-white">
                <a href="https://www.notion.so/gnaak/SSAFY-Billy-Bully-cef0cdf8e23c407e9e15dccd60b630d7">
                  Link
                </a>
              </span>
            </div>
            <div className="flex flex-row gap- items-center">
              <Image
                src={link}
                alt="깃허브"
                className="w-8 h-8"
                priority={false}
              />
              <span className="text-blue-600 underline dark:text-white">
                <a href="https://github.com/gnaak/divamusic">Link</a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
          <div className="flex flex-row xl:gap-5 gap-3">
            💻
            <div className="">
              <span className="font-bold">빌리불리&nbsp;</span>는 경제에 영향을
              주는 현상과 금융 흐름 학습을 위한 보드 게임 서비스입니다. 재미있는
              보드 게임을 통해 청소년층의&nbsp;{" "}
              <span className="font-bold"> 경제 교육</span>을 도와줍니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
