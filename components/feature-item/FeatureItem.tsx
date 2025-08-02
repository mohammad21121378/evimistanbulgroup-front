'use client'

import { ReactNode } from "react";
import cn from "classnames";
import styles from "./FeatureItem.module.css";
import { motion } from 'framer-motion'
import { slideSideAnimation, viewportMargin } from "@/constants/animation";

interface FeatureItemProps {
  icon?: ReactNode;
  title: string;
  description: string;
  hideIcon?: boolean;
  className?: string;
}

const defaultIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5441 3.18495C14.7744 4.00031 16.7311 7.28024 15.9157 10.5096C15.1003 13.7399 11.8204 15.6966 8.59107 14.8812C5.36076 14.0658 3.40311 10.7859 4.21945 7.55657C5.03481 4.32626 8.31377 2.36959 11.5441 3.18495Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M4.85291 12.043L3.29419 18.2866C3.14337 18.8918 3.70965 19.4308 4.30609 19.2508L7.29996 18.3469C7.58407 18.2613 7.89251 18.3391 8.1017 18.5493L10.3055 20.7629C10.7463 21.2056 11.5013 20.9983 11.6541 20.3931L13.2303 14.1495" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M19.4243 13.7422L20.7092 18.8956C20.8406 19.3967 20.3687 19.8404 19.8783 19.6886L17.405 18.9433C17.1685 18.8771 16.9136 18.9433 16.7443 19.1136L14.9316 20.9447" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M15.4414 6.30469C17.5372 6.43701 19.4063 7.90038 19.9444 10.0429C20.2752 11.3457 20.0572 12.667 19.4248 13.7441C18.7836 14.8767 17.6978 15.7446 16.3385 16.0842" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

export default function FeatureItem({
  icon = defaultIcon,
  title,
  description,
  hideIcon = false,
  className,
}: FeatureItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideSideAnimation()}
      viewport={viewportMargin}
      className={cn(styles.featureItem, className)}>
      {!hideIcon && icon && (
        <div className="gradient-bubble">
          {icon}
        </div>
      )}
      <div className={cn(styles.featureItem_title, 'font-semibold text-lg')}>
        {title}
      </div>
      <div className={cn("text-sm font-normal text-gray-500 leading-7", styles.featureItem_description)}>
        {description}
      </div>
    </motion.div>
  );
};
