import { refType } from "@/types";
import viewer from "@/assets/projects/viewer.png";
import infinitequery from "@/assets/projects/infinitequery.png";
import chart from "@/assets/projects/chart.png";
import commu from "@/assets/projects/commu.png";
import useModal from "@/hooks/useModal";
import Image from "next/image";

const Certificate = ({
  certiRef,
  oneRef,
  twoRef,
  threeRef,
  fourRef,
}: refType) => {
  const [isOpen, open, close] = useModal();

  return (
    <>
      <div ref={certiRef} className="flex flex-col xl:pt-20 md:pt-16 pt-12">
        <span className="font-bold md:text-xl">기여 사항</span>
        <div>
          <div ref={oneRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              1️⃣ 뷰어 페이지
            </span>
            <span className="md:text-base text-sm">
              뉴스, 비문학 글을 쉽게 읽고 요약하게 도와주는 뷰어 페이지 제작
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                📄
                <div className="flex flex-col w-full">
                  <div className="">
                    <span className="font-bold">형광펜, 볼드체, 메모 기능</span>
                    을 활용하여 독해에 도움을 줄 수 있게 구현하였습니다.
                    사용자가 메모를 작성하고자 했던 위치와, 내용을 매칭하는데
                    도움을 주기 위해 onMouseEnter 이벤트를 활용하여 메모를
                    작성했던 위치로 이동하면 메모가 나타납니다.
                    <br />
                    <br /> 임시 저장 후 마이페이지에서 읽던 글 클릭 시, 사용자가
                    기존에 했던 작업들을 모두 확인하고 수정할 수 있도록
                    구현했습니다. <br />
                    <br />글 목록 페이지 이동 외에도 뉴스 링크, 커뮤니티 내부,
                    읽던 글에서 뷰어 페이지로의 라우팅이 가능해야 했기에
                    useNavigate의 state를 활용하여 분기 처리 했습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={viewer} alt="뷰어 페이지 페이지" />
            </div>
          </div>
        </div>
        <div>
          <div ref={twoRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
            <span className="font-bold md:text-base text-sm">
              2️⃣ 글 목록 및 커뮤니티 목록 페이지
            </span>
            <span className="md:text-base text-sm">
              글 목록과 커뮤니티 목록을 쉽게 검색 할 수 있도록 검색 기능 제공
            </span>
            <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
              <div className="flex flex-row xl:gap-5 gap-3">
                🔍
                <div className="flex flex-col w-full">
                  <div className="">
                    크롤링을 사용하여 뉴스 및 비문학 데이터를 가져와 데이터의
                    양이 많기 때문에 React Query의 &nbsp;
                    <span className="font-bold">
                      useInfiniteQueries를 활용하여 무한스크롤을 구현
                    </span>
                    했습니다. 스크롤 위치마다 다른 도메인의 글이 나타나는게
                    아니기 때문에 페이지네이션보다 무한스크롤의 방식이 UX 향상에
                    좋다고 판단했습니다. 또한 검색 필터를 활용해서 사용자가
                    원하는 종류의 글을 검색할 수 있도록 구현했습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
              <Image src={infinitequery} alt="글 & 커뮤니티 페이지 페이지" />
            </div>
          </div>
        </div>
        <div ref={threeRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
          <span className="font-bold md:text-base text-sm">
            3️⃣ 챌린지 페이지
          </span>
          <span className="md:text-base text-sm">
            매일 2개의 비문학 문제를 풀고, 그에 따른 점수 제공
          </span>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              📈
              <div className="flex flex-col w-full">
                <div className="">
                  chart.js를 활용해 그래프를 구현하여 사용자들의 점수와 본인의
                  점수를 비교할 수 있습니다.
                  <br />
                  <br />
                  사용자가 챌린지를 진행하지 않은 날이 있는 경우 이전 날의
                  점수를 배열에 포함하여 표기했으며, 처음 챌린지를 진행한
                  경우에도 이전 날들을 기본값인 1,000점으로 표기했습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
            <Image src={chart} alt="챌린지 페이지" />
          </div>
        </div>
        <div ref={fourRef} className="flex flex-col gap-3 lg:pt-12 pt-10">
          <span className="font-bold md:text-base text-sm">4️⃣ 커뮤니티</span>
          <span className="md:text-base text-sm">
            함께 글을 읽을 수 있는 커뮤니티에서 구성원이 읽은 글과 요약, 채팅
            기능
          </span>
          <div className="bg-[#F1F1EF] p-4 md:flex hidden rounded-xl w-[100%] text-black lg:px-5 lg:text-base text-sm">
            <div className="flex flex-row xl:gap-5 gap-3">
              📈
              <div className="flex flex-col w-full">
                <div className="">
                  채팅을 구현하기 위해 커뮤니티에 늦게 가입한 사용자도 이전의
                  채팅 내용을 확인할 수 있게 하기 위해 WebSocket 대신&nbsp;
                  <span className="font-bold">Polling</span>
                  방식을 택했습니다.
                  <br />
                  <br />
                  커뮤니티의 목적이 동시간대에 같은 글을 읽는 것이 아닌, 글을
                  읽는데 어느정도 강제성을 주는 것이기 때문에 사용자가 항상
                  접속해 있다고 가정할 수 없었습니다. 주기적으로 서버에 요청을
                  보내기에 네트워크에 부하가 발생할 수 있지만, useQuery의 캐싱을
                  통해 요청 수를 줄일 수 있었습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly xl:border lg:border-gray-400 xl:py-5 rounded-xl md:shadow-xl shadow-md">
            <Image src={commu} alt="커뮤니티 페이지" />
          </div>
        </div>
      </div>
    </>
  );
}; 

export default Certificate;