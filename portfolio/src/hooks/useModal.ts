import { useCallback, useState } from "react";

const useModal = (): [boolean, () => void, () => void, boolean, ()=>void, ()=>void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [is0pen, setIs0pen] = useState<boolean>(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
    const op2n = useCallback(() => {
      setIs0pen(true);
    }, []);
    const clos2e = useCallback(() => {
      setIs0pen(false);
    }, []);
  return [isOpen, open, close, is0pen, op2n, clos2e];
};

export default useModal;
