/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import As from "./As";
import { useEffect, useRef } from "react";
import Diva from "./Diva";
import Skills from "./Skills";
import Certificate from "./Certificates";
import Exp from "./Exp";
import Menu from "@/components/Menu/index";
import useClear from "@/hooks/clear";

const Divamusic = () => {
  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const expRef = useRef(null);
  const asRef = useRef(null);

  const clearall = useClear();
  useEffect(() => {
    clearall();
  }, []);

  return (
    <>
      <div className="relative flex-col w-full items-center select-none  dark:bg-gray-800 dark:text-white xl:w-full flex justify-center">
        <div className="lg:w-3/5 w-4/5">
          <div className="flex flex-col pb-20 xl:px-10">
            <Diva baseRef={baseRef} />
            <Skills skillRef={skillRef} />
            <Certificate
              certiRef={certiRef}
              oneRef={oneRef}
              twoRef={twoRef}
              threeRef={threeRef}
            />
            <Exp expRef={expRef} />
            <As asRef={asRef} />
          </div>
        </div>
      </div>
      <Menu
        baseRef={baseRef}
        skillRef={skillRef}
        certiRef={certiRef}
        expRef={expRef}
        oneRef={oneRef}
        twoRef={twoRef}
        threeRef={threeRef}
        asRef={asRef}
      />
    </>
  );
};

export default Divamusic;
