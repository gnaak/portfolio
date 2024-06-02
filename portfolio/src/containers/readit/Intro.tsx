import Image from "next/image";
import link from "@/assets/link.png";
import notion from "@/assets/notion.png";
const Intro = () => {
  return (
    <>
      <span className="font-bold text-xl">소개</span>
      <div className="flex flex-col xl:gap-3 gap-2 ">
        <div className="flex flex-row justify-between items-center">
          <div className="md:text-base text-sm">
            문해력을 키우는 가장 쉬운 방법&nbsp;
            <span className="font-bold ">READIT </span>
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
                <a href="https://sulky-cemetery-fa5.notion.site/d5fbd716e70641e895392187e15e5ff7?pvs=4">
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
            📚
            <div className="">
              <span className="font-bold">뉴스, 비문학&nbsp;</span>읽기 요약을
              통해&nbsp; <span className="font-bold">문해력 향상</span>에 도움을
              주는 서비스입니다. 챌린지를 통해 본인의 실력을 확인하고,
              커뮤니티를 통해 구성원과 함께 문해력을 향상할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
