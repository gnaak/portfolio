import { refType } from "@/types";
import landing from "@/assets/projects/landing.gif";
import home from "@/assets/projects/home.gif";
import rangecheck from "@/assets/projects/rangecheck.gif";
import mypage from "@/assets/projects/mypage.gif";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import RangeCheckPage from "../tryme/PitchDetector";

const Certificate = ({ certiRef, oneRef, twoRef, threeRef }: refType) => {
  const [isOpen, open, close] = useModal();

  return (
    <>
      <div ref={certiRef} className="flex flex-col xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold md:text-xl">기여 사항</span>
        <div>
          <div ref={oneRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">1️⃣ 캐러셀</span>
            <span className="md:text-base text-sm">
              캐러셀 자체 커스터마이징 진행
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🐫
                <div className="flex flex-col w-full">
                  <div className="flex flex-row">
                    <span>
                      캐러셀 구현”만”을 위한 라이브러리 사용 시 필요한 기능에
                      비해 너무 과도한 리소스를 차지하게 되고, 서비스 성능에
                      부정적인 영향을 미칠 수 있다고 판단하여 외부 라이브러리를
                      사용하지 않고 개발을 진행했습니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image
                src={landing}
                alt="랜딩 페이지"
                className="md:inline hidden
                          h-auto w-auto shrink-0"
                unoptimized
              />
              <Image
                src={home}
                alt="홈 페이지"
                className="
                          h-auto w-auto shrink-0"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div>
          <div ref={twoRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              2️⃣ Web Audio API
            </span>
            <div className="flex flex-row justify-between items-center md:text-base text-sm">
              <span className="">오디오 소스를 실시간 분석 및 시각화</span>
              <div className="flex flex-row items-center justify-center gap-1">
                <span className="text-blue-500 md:inline hidden">try me!</span>

                <span
                  className="material-symbols-outlined cursor-pointer flex items-center"
                  onClick={open}
                >
                  play_circle
                </span>
              </div>

              {isOpen ? (
                <>
                  <RangeCheckPage close={close} />
                </>
              ) : null}
            </div>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🎵
                <div className="flex flex-col w-full">
                  <div className="flex flex-row">
                    <span>
                      사용자의 음성이 마이크를 통해 입력되면, 실시간으로
                      분석기를 사용해 음역대를 주파수로 변환하고, Pitch.js에서
                      제공하는 알고리즘 로직을 활용하여 사용자들에게 더 친숙한
                      헤르츠(Hz)로 제공했습니다.
                      <br />
                      <br />
                      음역대 테스트 신뢰도 향상을 위해 신뢰 구간 95%로 이상값을
                      제거한 테스트 결과를 옥타브로 표기 변환 후 음역대 정보를
                      제공했습니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image
                src={rangecheck}
                alt="음역대 테스트"
                className="
                          h-auto w-auto shrink-0"
                unoptimized
              />
              <Image
                src={mypage}
                alt="마이 페이지"
                className="md:inline hidden
                          h-auto w-auto shrink-0"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div>
          <div ref={threeRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">3️⃣ Jotai</span>
            <span className="md:text-base text-sm">
              메인 페이지에 라우팅 되었을 때, 하나의 페이지에서 렌더링되어야
              하는 컴포넌트가 달라질 수 있어 전역으로 상태 관리를 진행했습니다.
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                📢
                <div className="flex flex-col w-full">
                  <div className="flex flex-row">
                    <span>
                      사용자의 음역대를 바탕으로 맞춤형 노래를 추천해주고, 이에
                      따라 연습모드 / 실전모드로 접속이 가능해야 했습니다. 동적
                      라우팅을 사용하게 되면, 본인의 음역대에 아닌 노래에도
                      접속이 가능해지고, UX를 저하시킨다고 판단하여 하나의
                      페이지에 모드에 따라 다른 컴포넌트가 렌더링되도록
                      구현했습니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
