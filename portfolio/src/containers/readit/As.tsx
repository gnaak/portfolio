import { refType } from "@/types";

const As = ({ asRef }: refType) => {
  return (
    <>
      <div ref={asRef} className="flex flex-col gap-3 xl:py-20 md:py-16 pt-12">
        <span className="font-bold md:text-xl">회고</span>
        <div className="flex flex-col xl:gap-3">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1 md:text-base text-sm ">
              <span>
                1️⃣ Access Token, Refresh Token의 사용법과 각 토큰을 이용한
                사용자 인증, 인가 방식을 배웠습니다.
              </span>
              <span>
                2️⃣ React Query를 활용한 서버 통신에 익숙해 질 수 있었습니다.
              </span>
              <span>
                3️⃣ 프론트 1인으로 설정, 폴더 설계 및 구성 등 처음부터 익힐 수
                있었습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default As;
