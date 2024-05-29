import Image from "next/image";
import link from "@/assets/link.png";

const Intro = () => {
  return (
    <>
      <span className="font-bold text-xl">소개</span>
      <div className="flex flex-col xl:gap-3">
        <div className="flex flex-row justify-between items-center xl:pr-10">
          <div>
            경제를 쉽게! 그리고 빠르게!&nbsp;
            <span className="font-bold ">BillyBully </span>
          </div>
          <div className="flex flex-row items-center xl:gap-1">
            <Image
              src={link}
              alt="깃허브"
              className="w-6 h-6"
              priority={false}
            />
            <span className="text-blue-600 underline">
              <a href="https://github.com/gnaak/billybully">Link</a>
            </span>
          </div>
        </div>
        <div className="bg-[#F1F1EF] xl:p-4 flex rounded-xl xl:w-[100%] ">
          <div className="flex flex-row xl:gap-5">
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
