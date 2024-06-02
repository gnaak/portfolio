import { useEffect, useState } from "react";

interface TimerProps {
  setIsTimeout: any;
}

const TIMEOUT_SECONDS = 20;

const Timer = ({ setIsTimeout }: TimerProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCnt) => prevCnt + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count === TIMEOUT_SECONDS) {
      setIsTimeout(true);
    }
  }, [count]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div className="md:text-3xl lg:text-2xl text-xl">
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span>:</span>
      <span className="text-blue-400">
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
