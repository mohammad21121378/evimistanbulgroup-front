import { useEffect, useState } from "react";

export function useLikeTimer(readingTime: number) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLikeDisabled, setIsLikeDisabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (elapsedTime >= 2) {
      setIsLikeDisabled(false);
    }
  }, [elapsedTime]);

  return isLikeDisabled;
}
