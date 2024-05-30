"use client";

import Image from "next/image";
import Base from "../components/Base";
import Skills from "../components/Skills/Skills";
import Certi from "../components/Certificates";
import Exp from "../components/Experience";
import Projects from "../components/Projects/Projects";
import { useRef, useState } from "react";
const Home = () => {
  const baseRef = useRef(null);
  const skillRef = useRef(null);
  const certiRef = useRef(null);
  const expRef = useRef(null);
  const pjtRef = useRef(null);

  return (
    <>
      <div className="relative overflow-hidden h-screen dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col overflow-auto h-full">
          <div
            ref={baseRef}
            className="w-full flex-col flex items-center md:py-10 md:pt-20 pt-10 py-5"
          >
            <Base />
          </div>
          <div
            ref={skillRef}
            className="w-full flex-col flex items-center md:py-10 py-5"
          >
            <Skills />
          </div>
          <div
            ref={certiRef}
            className="w-full flex-col flex items-center md:py-10 py-5"
          >
            <Certi />
          </div>
          <div
            ref={expRef}
            className="w-full flex-col flex items-center md:py-10 py-5"
          >
            <Exp />
          </div>
          <div
            ref={pjtRef}
            className="w-full flex-col flex items-center md:py-10 py-5"
          >
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
