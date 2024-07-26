"use client";

import React from "react";
import cn from "classnames";
import styles from "./dropdown.module.css";
import { ChevronDown } from "@/constants/icons";

export default function Dropdown({ options, className, ...props }) {
  return (
    <div className={cn(styles.container, className)}>
      <select required {...props} className={cn("label-medium", styles.select)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

        {ChevronDown}
      </select>

      {ChevronDown}
    </div>
  );
}
