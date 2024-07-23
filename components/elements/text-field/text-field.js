import React from "react";
import cn from "classnames";
import styles from "./text-field.module.css";
import icons from "../../../constants/icons";

export default function TextField({
  placeholder,
  className,
  show,
  showPassword,
  togglePasswordVisibility,
  error,
  ...props
}) {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.show]: show,
      })}
    >
      <input
        type={props.type || "text"}
        className={cn("label-medium", styles.input, {
          [styles.error]: error,
        })}
        placeholder={placeholder}
        {...props}
      />

      {show && (
        <button
          type="button"
          className={styles.button}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? icons.Hide : icons.Eye}
        </button>
      )}
    </div>
  );
}
