import { create } from "zustand";
import RootState from "@/types/storeProps";

const useStore = create<RootState>((set) => ({
  menu: false,
  setMenu: (menu) => set({ menu }),
  isMenu: false,
  setIsMenu: (isMenu) => set({ isMenu }),
  sideMenu: false,
  setSideMenu: (sideMenu) => set({ sideMenu }),
  smallMenu: false,
  setSmallMenu: (smallMenu) => set({ smallMenu }),
  num1: 0,
  setNum1: (num1) => set({ num1 }),
  num2: 0,
  setNum2: (num2) => set({ num2 }),
}));

export default useStore;
