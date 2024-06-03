"use client";
import { refType } from "@/types";
import SmallMenu from "./SmallMenu";
import MainMenu from "./Menu";
import SideMenu from "./SideMenu";

const Menu = ({
  baseRef,
  skillRef,
  pjtRef,
  certiRef,
  expRef,
  oneRef,
  twoRef,
  fourRef,
  threeRef,
  asRef,
}: refType) => {
  return (
    <>
      <div className="fixed top-20 left-0 w-1/6 xl:h-screen flex flex-col xl:justify-between z-30  select-none  dark:text-white">
        <SmallMenu
          baseRef={baseRef}
          skillRef={skillRef}
          pjtRef={pjtRef}
          certiRef={certiRef}
          expRef={expRef}
        />
        <MainMenu
          baseRef={baseRef}
          skillRef={skillRef}
          pjtRef={pjtRef}
          certiRef={certiRef}
          expRef={expRef}
          oneRef={oneRef}
          twoRef={twoRef}
          threeRef={threeRef}
          asRef={asRef}
        />
      </div>
      <SideMenu
        baseRef={baseRef}
        skillRef={skillRef}
        pjtRef={pjtRef}
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

export default Menu;
