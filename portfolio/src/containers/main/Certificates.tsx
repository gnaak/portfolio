"use client";

import { refType } from "@/types";
import { useState } from "react";

const Certi = ({ certiRef }:refType) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div
        ref={certiRef}
        className="w-full flex-col flex items-center xl:pt-20 md:pt-16 pt-12"
      >
        <div className="lg:w-3/5 xl:px-20 w-[80%]">
          <div className="flex flex-col lg:gap-10 gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-end">
                <span className="font-bold xl:text-2xl lg:text-xl md:text-lg">
                  CERTIFICATES
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
                <div className="flex flex-row md:justify-between">
                  <div className="flex flex-col xl:gap-5 lg:gap-3 w-[48%]">
                    <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
                      COMPUTERS
                    </span>
                    <div className="flex flex-col md:gap-3">
                      <span className="md:text-base text-sm">
                        정보처리기사
                        <span className="md:inline hidden">
                           -24202011160R (2024.09.10)
                        </span>
                      </span>
                      <span className="md:text-base text-sm">
                        SQLD
                        <span className="md:inline hidden">
                          -051001897 (2023.12.15)
                        </span>
                      </span>
                      <span className="md:text-base text-sm">
                        ADsP
                        <span className="md:inline hidden">
                          -038001567 (2023.09.15)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col xl:gap-5 lg:gap-3 w-[48%]">
                    <span className="xl:text-xl lg:text-lg font-bold md:text-base text-sm">
                      ENGLISH
                    </span>
                    <span className="md:text-base text-sm">
                      OPIc AL
                      <span className="md:inline hidden">
                        2A5700409328 (2023.01.06)
                      </span>
                    </span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certi;
