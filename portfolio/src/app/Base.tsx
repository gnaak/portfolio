import Image from "next/image";
import profile from "@/assets/img/image.png";

const Base = () => {
  return (
    <>
      <div className="lg:pt-40 lg:p-10 lg:w-3/5">
        <div className="flex flex-col lg:gap-14">
          <div className="flex flex-row justify-between">
            <Image
              src={profile}
              alt="프로필 사진"
              className="w-1/5 rounded-full"
            />
            <div className="contact lg:flex flex-col lg:w-2/3 justify-between lg:py-5">
              <span className="font-bold text-blue-950 lg:text-3xl lg:h-1/3 flex items-center">
                Contact.
              </span>
              <div className="flex flex-row lg:h-2/3 justify-start lg:text-xl items-center lg:gap-5">
                <div className="flex flex-col lg:h-2/3 justify-center lg:text-xl items-start">
                  <span className="font-bold">[Email]</span>
                  <span className="font-bold">[Phone]</span>
                  <span className="font-bold">[Github]</span>
                </div>
                <div className="flex flex-col lg:h-2/3 justify-center lg:text-xl items-start">
                  <a href="mailto:o1027447735@gmail.com">
                    &nbsp;o1027447735@gmail.com
                  </a>
                  <a href="tel:+821012345678">&nbsp;010-2744-7735</a>
                  <a href="https://github.com/gnaak">
                    &nbsp;https://github.com/gnaak
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E5EAEE] lg:text-xl lg:p-4 rounded-xl lg:w-[85%]">
            <div className="flex flex-row lg:gap-5">
              💡
              <div className="flex flex-row">
                <span>상상을 현실로 옮겨주는 코딩에 흥미를 느낀</span>
                <span className="font-bold">&nbsp;더 좋은 UX</span>
                <span>에 관심이 많은 개발자,</span>
                <span className="font-bold">&nbsp;이근학</span>
                <span>입니다.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Base;
