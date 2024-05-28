"use client";

import { useState } from "react";

const Exp = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="lg:w-3/5 lg:px-20">
        <div className="flex flex-col lg:gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-end">
              <span className="font-bold lg:text-2xl">EXPERIENCE</span>
              <div className="text-blue-600 cursor-pointer">
                {open ? (
                  <span onClick={() => setOpen(false)}>닫기</span>
                ) : (
                  <span onClick={() => setOpen(true)}>더 보기</span>
                )}
              </div>
            </div>
            <span className="w-full border border-gray-200"></span>
          </div>
          {open ? (
            <>
              <div className="flex flex-col lg:gap-2">
                <div className="flex flex-row lg:gap-3">
                  <span className="font-bold text-xl">
                    삼성 청년 SW 아카데미(SSAFY)
                  </span>
                  <span className="text-xl">(2023.07.05 - 2024.06.30)</span>
                </div>
                <div className="flex flex-row lg:gap-3">
                  <span className="font-bold text-xl">
                    건국대학교 화학공학부{" "}
                  </span>
                  <span className="text-xl">(2015.03 ~ 2021.08)</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Exp;
