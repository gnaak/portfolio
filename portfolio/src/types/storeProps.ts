interface RootState {
  menu: boolean;
  setMenu: (menu: boolean) => void;
  isMenu: boolean;
  setIsMenu: (isMenu: boolean) => void;
  sideMenu: boolean;
  setSideMenu: (sideMenu: boolean) => void;
}

export default RootState;
