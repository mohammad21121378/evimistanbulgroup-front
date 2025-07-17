"use client";

import { forwardRef, useId, useState, ChangeEvent, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import ErrorInput from "../ErrorInput";

type InputProps = {
  className?: string;
  isSelect?: boolean;
  iconRight?: ReactNode;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  labelClassName?: string;
  height?: string;
  isTextarea?: boolean;
  icon?: ReactNode;
  iconRightClassName?: string;
  boxClasses?: string;
  children?: ReactNode;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  textAreaClasses?: boolean;
  showError?: boolean;
  maxLength?: number | null;
  parentClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, InputProps>(
  (
    {
      className,
      isSelect = false,
      iconRight = (
        isSelect && (
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00052 4.97633L10.1254 0.851562L11.3039 2.03007L6.00052 7.33341L0.697266 2.03007L1.87577 0.851562L6.00052 4.97633Z" fill="#667085" />
          </svg>
        )
      ),
      error,
      placeholder,
      disabled = false,
      labelClassName,
      height = "h-14",
      isTextarea = false,
      icon,
      iconRightClassName,
      boxClasses,
      children,
      required = false,
      onChange,
      textAreaClasses = false,
      showError=true,
      maxLength = null,
      parentClassName,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const [charCount, setCharCount] = useState(0);
    const finalHeight = textAreaClasses ? "h-auto" : height;

    const commonClasses = `
      ${finalHeight} 
      w-full pl-3 transition outline  outline-1 bg-slate-100 outline-slate-200 rounded-2lg shadow-xs text-gray-500 placeholder-gray-500 focus:outline-orange-500 focus:ring-4 focus:ring-orange-200
      ${icon ? "!pl-9" : ""} 
      ${iconRight ? "!pr-9" : ""}
      ${disabled ? "bg-gray-100" : ""}
      ${error ? "!outline  outline-1 !outline-red-500 focus:outline-red-500 is-invalid focus:ring-4 focus:ring-red-200" : ""}
      ${className || ""}
      ${styles.input}
    `;

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (maxLength !== null) {
        setCharCount(e.target.value.length);
      }
      onChange?.(e);
    };

    const combinedOnChange = isTextarea ? handleTextareaChange : onChange;

    return (
      <div className={`w-full ${parentClassName || ""}`}>
        <div className={`${finalHeight} relative grid items-center w-full !p-0 ${styles.box} ${boxClasses || ""}`}>
          {icon && <div className="absolute left-3">{icon}</div>}

          {isTextarea ? (
            <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
              id={id}
              disabled={disabled}
              placeholder=""
              className={`py-2.5 resize-none scrollbar-hide ${commonClasses}`}
              {...rest}
              onChange={combinedOnChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
              maxLength={maxLength || undefined}
            />
          ) : isSelect ? (
            <select
              id={id}
              ref={ref as React.Ref<HTMLSelectElement>}
              disabled={disabled}
              className={`py-0 ${commonClasses}`}
              {...rest}
              onChange={onChange as (e: ChangeEvent<HTMLSelectElement>) => void}
            >
              {children}
            </select>
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={id}
              disabled={disabled}
              required={required}
              onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
              placeholder=""
              className={`py-0 ${commonClasses}`}
              {...rest}
              maxLength={maxLength || undefined}
            />
          )}

          <div className={`absolute right-3 ${iconRightClassName || ""}`}>{iconRight}</div>

{
  placeholder &&
          <label
            htmlFor={id}
            className={`absolute top-[50%] ${textAreaClasses ? "!top-5" : ""} translate-y-[-50%] text-gray-500 ${styles.label} ${icon ? "left-9" : "left-3"} ${labelClassName || ""}`}
          >
            <div>{placeholder}</div>
          </label>
}
        </div>

        <div className={`flex ${!error && isTextarea && maxLength ? "!justify-end" : "justify-between"}`}>
          {showError && <ErrorInput error={error} />}
          {isTextarea && maxLength && (
            <p className="mt-1 text-sm text-gray-500 text-right ml-auto">
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
