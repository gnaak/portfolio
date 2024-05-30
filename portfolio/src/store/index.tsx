import { create } from "zustand";
import RootState from "@/types/storeProps";

const useStore = create<RootState>((set) => ({
  menu: false,
  setMenu: (menu) => set({ menu }),
  isMenu: false,
  setIsMenu: (isMenu) => set({ isMenu }),
  sideMenu: false,
  setSideMenu: (sideMenu) => set({ sideMenu }),
}));

export default useStore;
