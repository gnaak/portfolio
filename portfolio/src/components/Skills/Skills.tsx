"use client";

import { useState } from "react";
import Bad from "./Bad";
import Good from "./Good";
import Normal from "./Normal";
import Etc from "./Etc";

const Skills = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <div className="lg:w-3/5 lg:px-20 h-full dark:text-white">
        <div className="flex flex-col lg:gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-end">
              <span className="font-bold lg:text-2xl">SKILLS</span>
              <div className="text-blue-600 cursor-pointer underline dark:text-white">
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
            <div className="flex flex-col lg:gap-10">
              <Good />
              <Normal />
              <Bad />
              <Etc />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Skills;
