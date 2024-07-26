"use client";

import React from "react";
import cn from "classnames";
import styles from "./dropdown.module.css";
import icons, { ChevronDown } from "../../../constants/icons";

export default function Dropdown({ options, ...props }) {
  return (
    <div className={styles.container}>
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
