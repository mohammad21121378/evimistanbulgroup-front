'use client';
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  format?: boolean;
  speed?: number;
}

export default function AnimatedCounter({
  to,
  format = false,
  speed = to > 100 ? 162 : (to >50 ? 24 : 4),
}: AnimatedCounterProps) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  const duration = to / speed;

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, duration, count]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: .9 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: .5, ease: "easeOut" }}
    >
      {format ? displayValue.toLocaleString() : displayValue}
    </motion.span>
  );
}
