import Lottie from "lottie-react";
import error from '@/lotties/Connection error.json';
import classNames from "classnames";
import { useRef, useEffect } from "react";

export default function SvgForBg({ className }: { className?: string }) {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    lottieRef.current?.setSpeed(.9);
  }, []);

  return (
    <div className={classNames(className, 'opacity-10 w-96')}>
      <Lottie
        lottieRef={lottieRef}
        animationData={error}
        loop
        autoplay
      />
    </div>
  );
}
