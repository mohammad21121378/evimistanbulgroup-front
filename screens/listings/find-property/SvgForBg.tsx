import Lottie from "lottie-react";
import error from '@/lotties/Connection error.json';
import classNames from "classnames";
import { useRef, useEffect } from "react";

export default function SvgForBg({ className }: { className?: string }) {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    lottieRef.current?.setSpeed(.5);
  }, []);

  return (
    <div className={classNames(className, ' xl:w-[28rem] w-[22rem]')}>
      <Lottie
        lottieRef={lottieRef}
        animationData={error}
        loop
        className="opacity-15"
        autoplay
      />
    </div>
  );
}
