import Image from "next/image";
import link from "@/assets/link.png";

const Intro = () => {
  return (
    <>
      <span className="font-bold md:text-xl">소개</span>
      <div className="flex flex-col xl:gap-3 gap-2 ">
        <div className="flex flex-row justify-between items-center xl:pr-5">
          <span className="md:text-base text-sm">사용자 음역 분석 기반 음악 추천 및 연습 서비스</span>
          <div className="md:flex flex-row items-center gap-1 hidden">
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
        <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5">
          <div className="flex flex-row xl:gap-5 gap-3">
            🎤
              <div className="">
                <span className="font-bold">디바</span>는 노래를 좋아하는
                사람들이
                <span className="font-bold">
                  &nbsp;자신의 음역대에 맞는 노래를 찾고, 꾸준한 연습
                </span>
                을 통해
                <span className="font-bold">&nbsp;더욱 나은 가창력</span>을
                발휘할 수 있도록 도와주는 서비스입니다.
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
