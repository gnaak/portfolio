/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import zustand from "@/assets/skills/zustand.png";
import react_query from "@/assets/skills/react_query.png";
import ts from "@/assets/skills/ts.png";
import react from "@/assets/skills/react.svg";
import tailwind from "@/assets/tailwind.png";
import viewer from "@/assets/projects/viewer.png";
import infinitequery from "@/assets/projects/infinitequery.png";
import chart from "@/assets/projects/chart.png";
import commu from "@/assets/projects/commu.png";
import As from "./As";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Readit from "./Readit";
import useStore from "@/store";
import useClear from "@/hooks/clear";
import Menu from "@/components/Menu";
import Skills from "./Skills";
import Certificate from "./Certificates";
import Exp from "./Exp";

const ProjectReadit = () => {
  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const expRef = useRef(null);
  const asRef = useRef(null);
  const fourRef = useRef(null);

  const clearall = useClear();
  useEffect(() => {
    clearall();
  }, []);
  return (
    <>
      <div className="relative flex-col w-full items-center select-none  dark:bg-gray-800 dark:text-white xl:w-full flex justify-center">
        <div className="lg:w-3/5 w-4/5">
          <div className="flex flex-col pb-20 xl:px-10">
            <Readit />
            <Skills skillRef={skillRef} />
            <Certificate
              certiRef={certiRef}
              oneRef={oneRef}
              twoRef={twoRef}
              threeRef={threeRef}
              fourRef={fourRef}
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
        fourRef={fourRef}
        asRef={asRef}
      />
    </>
  );
};

export default ProjectReadit;
