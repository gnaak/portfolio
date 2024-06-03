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
          <div className="bg-[#F1F1EF] p-4 flex rounded-xl w-[100%] text-black lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              ⚠
              <div className="flex flex-col w-full">
                <div className="flex flex-row">
                  <span className="whitespace-pre-wrap ">
                    사용자의 음성 분석 시 Hz 값을 배열에 담아서 95% 신뢰 구간 중
                    최저음, 최고음만 DB에 보냈습니다. 사용자의 음성에 따라
                    배열에 계속 추가되는데, 프론트 단에서 배열을 가지고 있다
                    보니 1분이 넘어가면 서버가 느려지는 문제가 생겼습니다.
                    <br />
                    <br />
                    사용자에게 실시간으로 음역을 보여주기만 하면 시각화 후 값을
                    저장하지 않아도 됐겠지만, 최저음, 최고음을 기준으로 노래를
                    추천해주는 서비스를 기획했기 때문에 배열에 저장할 수 밖에
                    없었습니다.
                    <br />
                    <br />
                    배열 인덱스, 혹은 특정 시간마다 POST 요청을 보내는 방식을
                    택할 수도 있었지만, 네트워크 트래픽과 서버 부하를 고려하여
                    음역대 테스트 시간을 20초로 줄이는 방식을 택했습니다.
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