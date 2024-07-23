import React from "react";
import cn from "classnames";
import styles from "./toggle.module.css";

export default function Toggle({ isChecked, onChange, className, disabled }) {
  return (
    <div
      className={cn(
        styles.toggle,
        {
          [styles.toggled]: isChecked,
          [styles.disabled]: disabled,
        },
        className
      )}
      onClick={!disabled ? onChange : undefined}
    >
      <span className={styles.thumb}></span>
    </div>
  );
}
