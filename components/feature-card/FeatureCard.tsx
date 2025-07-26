'use client'

import React from "react";
import styles from "./FeatureCard.module.css";
import cn from "classnames";
import Link from "../ui/Link";
import { slideUpAnimation, viewportMargin } from "@/constants/animation";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  buttonLabel,
  buttonHref = "#",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      whileInView="show"
      viewport={viewportMargin} className={cn(styles.card, className)}>
      {icon && <div className={cn("gradient-bubble", styles.icon)}>{icon}</div>}

      <div>
        <div className={cn("text-2xl font-semibold mt-12", styles.title)}>{title}</div>
        <p className={cn("text-slate-500 font-normal text-base mt-6")}>{description}</p>
      </div>

      {buttonLabel && (
        <div className={styles.buttonWrapper}>
          <Link href={buttonHref} className={cn("", styles.button)}>
            <button className="button button-small !min-w-56 mt-12">
              {buttonLabel}
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};
