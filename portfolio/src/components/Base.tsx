const Base = () => {
  return (
    <>
      <div className="lg:pt-20 lg:px-20 lg:w-3/5">
        <div className="flex flex-col lg:gap-14">
          <div className="flex flex-row justify-between dark:text-white">
            <div className="flex flex-col items-center lg:py-7 justify-center lg:w-1/3">
              <div className="flex flex-col lg:gap-3 text-end">
                <span className="lg:text-2xl">LEE GEUN HAG</span>
                <span className="font-bold lg:text-5xl">이근학</span>
                <span className="lg:text-2xl">1995.01.17</span>
              </div>
            </div>
            <div className="contact lg:w-2/3 lg:py-7 flex items-center justify-center lg:px-10">
              <div className="lg:w-2/3 lg:flex flex-col lg:gap-3">
                <span className="font-bold text-blue-900 lg:text-3xl lg:h-1/3 flex items-center dark:text-blue-600">
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
          </div>

          <div className="bg-[#F1F1EF] lg:text-xl lg:p-4 flex justify-center rounded-xl lg:w-[100%] text-black">
            <div className="flex flex-row lg:gap-5">
              💡
              <div className="">
                상상을 현실로 옮겨주는 코딩에 흥미를 느낀
                <span className="font-bold">&nbsp;더 좋은 UX</span>에 관심이
                많은 개발자,
                <span className="font-bold">&nbsp;이근학</span>
                입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Base;
