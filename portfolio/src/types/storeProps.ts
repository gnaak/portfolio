interface RootState {
  menu: boolean;
  setMenu: (menu: boolean) => void;
  isMenu: boolean;
  setIsMenu: (isMenu: boolean) => void;
  sideMenu: boolean;
  setSideMenu: (sideMenu: boolean) => void;
  smallMenu: boolean;
  setSmallMenu: (smallMenu: boolean) => void;

  num1: number;
  setNum1: (num1: number) => void;
  num2: number;
  setNum2: (num1: number) => void;
}

export default RootState;
