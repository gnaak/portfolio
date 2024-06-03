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
                    뷰어 페이지에서 글을 읽을 때 작성했던 메모와 밑줄을
                    마이페이지 읽은 글에서 확인할 수 있어야 하고 임시 저장 후
                    다시 돌아왔을 때도 이어서 작업을 할 수 있게 구현해야
                    했습니다.
                    <br />
                    <br />
                    초기에는 글에서 인덱스를 기준으로 css를 적용하여 형광펜과
                    이벤트를 추가했습니다. 그러나 css를 적용하기 위해 새로운
                    태그를 생성하면 전체 글의 인덱스가 생성된 태그를 제외하고
                    계산하여 인덱스 값이 바뀌는 문제가 있었습니다. <br />
                    <br />
                    이를 해결하기 위해 dangerouslySetInnerHTML을 활용했습니다.
                    보안에 취약하다는 단점이 존재하지만, 안에 포함되는 HTML은
                    비문학과 뉴스 데이터였기 때문에 채택했습니다
                    <br />
                    <br />
                    메모를 작성한 부분에서 메모가 나타나는 이벤트의 경우, 메모를
                    작성한 범위에 맨 처음 마운트 시 메모를 담은 배열의 마지막
                    인덱스 값을 기준으로 1씩 증가하는 id 값을 부여했습니다. 이후
                    읽은 글 혹은 임시 저장 후 다시 돌아온 경우에 id에 해당하는
                    메모 인덱스를 통해 이벤트를 추가했습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
