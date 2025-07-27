'use client'

import classNames from "classnames";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { slideUpAnimation, viewportMargin } from "@/constants/animation";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function SectionCard({ children, className }: Props) {
    return (
        <motion.div
            variants={slideUpAnimation}
            initial="hidden"
            whileInView="show"
            viewport={viewportMargin}
            className={classNames(
                "bg-slate-100 outline outline-1 outline-slate-200 md:p-11 p-6 rounded-3xl shadow-sm",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
