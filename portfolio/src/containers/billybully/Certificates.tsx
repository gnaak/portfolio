import { refType } from "@/types";
import map from "@/assets/projects/map.png";
import dice from "@/assets/projects/dice.png";
import cards from "@/assets/projects/cards.png";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import Dice from "../tryme/Dice";

const Certificate = ({ certiRef, oneRef, twoRef, threeRef }: refType) => {
    const [isOpen, open, close] = useModal();

  return (
    <>
      <div ref={certiRef} className="flex flex-col xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold md:text-xl">기여 사항</span>
        <div>
          <div ref={oneRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              1️⃣ 맵 & 캐릭터
            </span>
            <span className="md:text-base text-sm">
              3D 모델링을 끝낸 맵과 캐릭터를 three.js를 활용하여 렌더링
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🎮
                <div className="flex flex-col w-full">
                  <div className="flex flex-row">
                    블렌더를 사용하여 자체 맵을 제작하고, three.js를 활용해 맵과
                    캐릭터 렌더링을 진행했습니다. 입체적으로 화면에 보여주기
                    위해 크기, 카메라 위치 등을 조절했습니다.
                    <br />
                    <br />
                    나온 주사위 점수에 맞게 캐릭터 이동 애니메이션과 발판을 밟을
                    때, 발판이 상하로 움직이는 애니메이션을 구현했습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={map} alt="게임 페이지" />
            </div>
          </div>
        </div>
        <div>
          <div ref={twoRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">2️⃣ 주사위</span>
            <div className="flex flex-row justify-between items-center md:text-base text-sm">
              <span className="">three.js를 활용한 주사위 커스터마이징</span>
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
                  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[500px] w-[300px] h-[250px] bg-white dark:bg-gray-900  rounded-lg border border-gray-400">
                    <Dice close={close} />
                  </div>
                </>
              ) : null}
            </div>

            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🎲
                <div className="flex flex-col w-full">
                  <div className="">
                    three.js를 활용하여 주사위를 커스터마이징 했습니다. 주사위를
                    굴렸을 때, 기준점의 각도를 기준으로 점수를 계산했습니다.
                    <br />
                    <br />
                    또한 주사위가 굴러가는 효과를 주기 위해서 cannon-es를
                    사용하여 중력을 구현했습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={dice} alt="주사위" />
            </div>
          </div>
        </div>
        <div ref={threeRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
          <span className="font-bold md:text-base text-sm">3️⃣ Zustand</span>
          <span className="md:text-base text-sm">
            플레이어가 보유한 자산에 영향을 끼칠 수 있는 요소가 다양하여 전역
            상태로 관리{" "}
          </span>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              ⁉
              <div className="flex flex-col w-full">
                <div className="">
                  플레이어가 특정 발판에 도달했을 때 액션 4종류와 3턴마다 모든
                  플레이어에 영향을 끼치는 액션이 존재했기 때문에 이를 props로
                  전달하게 되면 추후 유지보수가 어렵다고 판단하여 전역으로 상태
                  관리를 진행했습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
            <Image src={cards} alt="카드" />
          </div>
        </div>
      </div>
    </>
  );
} 

export default Certificate;