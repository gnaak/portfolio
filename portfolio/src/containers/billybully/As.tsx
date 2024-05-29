const As = () => {
  return (
    <>
      <span className="font-bold text-xl">회고</span>

      <div className="flex flex-col xl:gap-3">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-1">
            <span>
              1️⃣ 배운 적 없던 툴과 라이브러리를 학습하고 구현에 성공하면서
              자신감을 얻었습니다.
            </span>
            <span>
              2️⃣ 컴포넌트 구성과 데이터 관리에 있어 배울 수 있었습니다.
            </span>
            <span>
              3️⃣ React Query를 사용하여 캐싱, 상태 관리, 에러 처리에 대해 배울
              수 있었습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default As;