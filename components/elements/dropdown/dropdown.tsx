"use client";

import React from "react";
import cn from "classnames";
import styles from "./dropdown.module.css";
import { ChevronDown } from "@/constants/icons";

type Option = {
  value: number | string;
  label: string | number;
};

type DropdownProps = {
  options: Option[];
  className?: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

export default function Dropdown({
  options,
  className,
  withIcon = false,
  icon,
  ...props
}: DropdownProps) {
  return (
    <div className={cn(styles.container, className)}>
      {withIcon && <div className={styles.icon}>{icon}</div>}

      <select
        required
        {...props}
        className={cn("label-medium", styles.select)}
        defaultValue=""
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button className={styles.chevronIcon}>{ChevronDown}</button>
    </div>
  );
}
