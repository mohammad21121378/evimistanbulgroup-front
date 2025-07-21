'use client';
import { useEffect, useId, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedCounterProps {
    to: number;
    format?: boolean;
    speed?: number;
}

export default function AnimatedCounter({ to, format = false, speed = to > 1500 ? 1200 : 500 }: AnimatedCounterProps) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [currentValue, setCurrentValue] = useState(0);

    const duration = to / speed;

    useEffect(() => {
        if (inView) {
            controls.start({
                count: to,
                transition: { duration, ease: "linear" },
            });
        }
    }, [controls, to, inView, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ count: 0 }}
            animate={controls}
            onUpdate={(latest: any) => {
                setCurrentValue(Math.floor(latest.count));
            }}
        >
            {format ? currentValue.toLocaleString() : currentValue}
        </motion.span>
    );
}
