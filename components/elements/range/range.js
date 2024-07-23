import React from "react";
import cn from "classnames";
import styles from "./range.module.css";

export default function Range({ value, onChange, min, max, step, className }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={cn(styles.range, className)}
    />
  );
}
