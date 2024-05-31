"use client";

import { useState } from "react";

const Exp = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="lg:w-3/5 xl:px-20 w-4/5">
        <div className="flex flex-col lg:gap-5 gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-end">
              <span className="font-bold xl:text-2xl lg:text-xl md:text-lg">
                EXPERIENCE
              </span>
              <div className="text-blue-600 cursor-pointer underline dark:text-white md:text-base text-sm">
                {open ? (
                  <span onClick={() => setOpen(false)}>닫기</span>
                ) : (
                  <span onClick={() => setOpen(true)}>더보기</span>
                )}
              </div>
            </div>
            <span className="w-full border border-gray-200"></span>
          </div>
          {open ? (
            <>
              <div className="flex flex-col lg:gap-2">
                <div className="flex flex-row lg:gap-3">
                  <span className="font-bold xl:text-lg md:text-base text-sm">
                    삼성 청년 SW 아카데미(SSAFY)
                  </span>
                  <span className="xl:text-lg md:inline hidden">
                    (2023.07.05 - 2024.06.30)
                  </span>
                </div>
                <div className="flex flex-row lg:gap-3">
                  <span className="font-bold xl:text-lg md:text-base text-sm">
                    건국대학교 화학공학부
                  </span>
                  <span className="xl:text-lg md:inline hidden">
                    (2015.03.02 - 2021.08.31)
                  </span>
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
