import React from "react";
import cn from "classnames";
import styles from "./text-field.module.css";
import { Hide, Show } from "@/constants/icons";

type TextFieldProps = {
  type?: string;
  placeholder: string;
  className?: string;
  show?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  error?: boolean;
};

export default function TextField({
  placeholder,
  className,
  show,
  showPassword,
  togglePasswordVisibility,
  error,
  ...props
}: TextFieldProps) {
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
          {showPassword ? Hide : Show}
        </button>
      )}
    </div>
  );
}
