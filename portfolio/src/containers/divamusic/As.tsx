const As = () => {
  return (
    <>
      <span className="font-bold text-xl">회고</span>

      <div className="flex flex-col xl:gap-3">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-1">
            <span>
              1️⃣ 기획부터 배포 단계까지 진행하며 서비스 구체화의 중요성을
              깨달았습니다.
            </span>
            <span>
              2️⃣ 3인 이상 프로젝트를 진행하면서 깃, 지라, 피그마 등 다양한 협업
              툴에 대해 배울 수 있었습니다.
            </span>
            <span>
              3️⃣ 폴더 구조, 깃 컨벤션, 코드 리뷰 등 협업 시 필요한 역량을 익힐
              수 있었습니다.
            </span>
            <span>
              4️⃣ 배운 적 없던 툴과 라이브러리를 학습하고 구현에 성공하면서
              자신감을 얻었습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default As;