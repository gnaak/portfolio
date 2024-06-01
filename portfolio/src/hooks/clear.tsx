/* eslint-disable react-hooks/exhaustive-deps */
import useStore from "@/store";
import { useCallback } from "react";

const useClear = (): (() => void) => {
  const { setNum1, setNum2, setMenu, setIsMenu, setSideMenu, setSmallMenu } =
    useStore();
  const clearall = useCallback(() => {
    setNum1(0);
    setNum2(0);
    setMenu(false);
    setIsMenu(false);
    setSideMenu(false);
    setSmallMenu(false);
  }, []);

  return clearall;
};

export default useClear;
