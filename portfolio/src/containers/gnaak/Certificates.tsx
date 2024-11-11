import { refType } from "@/types";
import Image from "next/image";
import mainpage from "@/assets/projects/mainpage.png";
import project from "@/assets/projects/project.png";
import mobile1 from "@/assets/projects/mobile1.png";
import mobile2 from "@/assets/projects/mobile2.png";
import desktop from "@/assets/projects/desktop.png";

const Certificate = ({
  certiRef,
  oneRef,
  twoRef,
  threeRef,
  fourRef,
}: refType) => {
  return (
    <>
      <div ref={certiRef} className="flex flex-col xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold md:text-xl">진행 상황</span>
        <div>
          <div ref={oneRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              1️⃣ 메인 페이지
            </span>
            <span className="md:text-base text-sm">
              UX 및 웹 최적화를 고려한 메인 페이지 제작
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                📄
                <div className="flex flex-col w-full">
                  <div className="">
                    프론트엔드 개발자로 포트폴리오 사이트를 제작이 역량을 가장
                    있는 그대로 보여줄 수 있다고 생각했습니다. 다양한 레퍼런스를
                    참고한 결과 css를 이용한 과도한 애니메이션은 오히려 집중을
                    분산시킨다고 생각했고, 개발자들이 가장 익숙한 docs와 노션 중
                    노션의 UI를 차용하여 제작했습니다.
                    <br />
                    <br />
                    프로젝트 페이지에서 개발했던 프로젝트의 간략한 서비스를
                    제공하여 직접 사용해보게 만들고자 사이트를 제작했습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={mainpage} alt="메인 페이지" />
            </div>
          </div>
        </div>
        <div>
          <div ref={twoRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              2️⃣ 프로젝트 페이지
            </span>
            <span className="md:text-base text-sm">
              프로젝트의 간략한 소개와 사용 기술, 기여 사항, 트러블슈팅, 회고
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🎈
                <div className="flex flex-col w-full">
                  <div className="">
                    진행했던 프로젝트들을 다시 한번 정리해보고 회고할 수 있는
                    시간을 가졌습니다. 깃허브에 올라간 코드들을 다시 한번
                    확인하면서 "지금 짠다면 더 좋은 코드를 짤 수 있지 않을까?"
                    라는 생각을 했습니다.
                    <br />
                    <br />
                    프로젝트 중 DIVA의 음역대 측정, BillyBully의 주사위,
                    Readit의 뷰어 설명란에 &nbsp;
                    <span className="text-blue-500 underline">더보기</span>를
                    추가하여 간단한 음역대 측정, 주사위 굴리기, 형광펜 및 볼드체 기능을 추가하였습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={project} alt="프로젝트 페이지" />
            </div>
          </div>
        </div>
        <div ref={threeRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
          <span className="font-bold md:text-base text-sm">3️⃣ UX</span>
          <span className="md:text-base text-sm">
            반응형 웹, 다크 모드, 목차
          </span>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              📱
              <div className="flex flex-col w-full">
                <div className="">
                  320, 640, 1024, 1280, 1440, 1920px을 기준으로 사이트를 조금씩
                  다르게 구성했습니다. 큰 화면에서 많은 정보는 필요할 수 있지만,
                  작은 화면에서 동일한 정보를 제공하면 과도하 게 많다고 느낄 수
                  있다고 생각해서 간략한 내용만 담았습니다.
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md shrink-0">
            <Image src={mobile1} alt="모바일1" />
            <Image src={mobile2} alt="모바일2" className="md:inline hidden" />
          </div>
        </div>
        <div ref={fourRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
          <span className="font-bold md:text-base text-sm">4️⃣ 웹 최적화</span>
          <span className="md:text-base text-sm">
            LCP, TBT, CLS를 고려한 웹 최적화 및 코드 리팩토링
          </span>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              ⚙
              <div className="flex flex-col w-full">
                <div className="">
                  lighthouse로 웹 성능을 측정해가며 불필요한 코드 제거 및
                  최적화를 진행했습니다. 데스크탑의 경우 좋은 성능을 보였으나,
                  모바일 화면의 경우 성능이 85까지 내려와 불필요한 코드를 줄이고
                  컴포넌트 화를 통해 리팩토링 예정입니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
            <Image src={desktop} alt="데스크톱" />
          </div>
        </div>
      </div>
    </>
  );
}; 

export default Certificate;