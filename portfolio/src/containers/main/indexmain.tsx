"use client";
import Base from "@/containers/main/Base";
import Skills from "@/containers/main/Skills/Skills";
import Certi from "@/containers/main/Certificates";
import Exp from "@/containers/main/Experience";
import Projects from "@/containers/main/Projects/Projects";
import { useEffect, useRef, useState } from "react";
import useClear from "@/hooks/clear";
import Menu from "@/components/Menu/index";

const Main = () => {
  const clearall = useClear();
  useEffect(() => {
    clearall();
  }, []);

  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const expRef = useRef(null);
  const pjtRef = useRef(null);
  return (
    <>
      <div className="relative flex flex-col  h-auto dark:bg-gray-800 dark:text-white">
        <Base baseRef={baseRef} />
        <Skills skillRef={skillRef} />
        <Projects pjtRef={pjtRef} />
        <Certi certiRef={certiRef} />
        <Exp expRef={expRef} />
      </div>
      <Menu
        baseRef={baseRef}
        skillRef={skillRef}
        pjtRef={pjtRef}
        certiRef={certiRef}
        expRef={expRef}
      />
    </>
  );
};

export default Main;
