import { refType } from "@/types";

const Exp = ({ expRef }: refType) => {
  return (
    <>
      <div
        ref={expRef}
        className="md:flex flex-col xl:pt-20 md:pt-16 hidden gap-3"
      >
        <span className="font-bold md:text-xl">트러블 슈팅</span>

        <div className="flex flex-col xl:gap-3">
          <div className="bg-[#F1F1EF] p-4 flex rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              ⚠
              <div className="flex flex-col w-full">
                <div className="flex flex-row">
                  <span className="whitespace-pre-wrap ">
                    초기에는 props를 활용하여 데이터를 전달할 수 있으면 전역
                    상태 관리를 최대한 지양하고자 했습니다.
                    <br />
                    <br />
                    맵, 캐릭터, 플레이어, 주사위로 컴포넌트를 나누어서
                    관리했는데, 주사위를 굴릴 때마다 해당하는 플레이어의 자산,
                    캐릭터, 그리고 캐릭터가 이동함에 따라 맵에도 주사위 점수를
                    전달해줘야 했습니다.
                    <br />
                    <br />
                    클린 코드가 짧은 코드만을 뜻하는 것은 아니지만, 주사위 점수
                    → 맵, 캐릭터 → 액션 발생 → 플레이터 자산 변경으로 이어지는
                    데이터 전달에서 prop drilling 발생 가능성과 관리의 어려움이
                    생길 수 있다고 판단하여 전역 상태로 관리하게 되었습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exp;