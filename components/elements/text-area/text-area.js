import React from "react";
import cn from "classnames";
import styles from "./text-area.module.css";

export default function TextArea({ placeholder, className, ...props }) {
  return (
    <textarea
      type="text"
      className={cn("label-medium", styles.textarea, className)}
      placeholder={placeholder}
      {...props}
    />
  );
}
