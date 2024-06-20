import { refType } from "@/types";

const As = ({ asRef }: refType) => {
  return (
    <>
      <div ref={asRef} className="flex flex-col gap-3 xl:py-20 md:py-16 pt-12">
        <span className="font-bold md:text-xl">회고</span>
        <div className="flex flex-col xl:gap-3">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1 md:text-base text-sm ">
              <span>1️⃣ Vercel.app을 이용한 페이지 배포를 배울 수 있었습니다.</span>
              <span>
                2️⃣ Lighthouse를 사용하여 웹 최적화에 대해 배울 수 있었습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default As;
