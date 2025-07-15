"use client";

import React from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Ques, Filter } from "@/constants/icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

type SearchBarProps = {
  placeholder: string;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
};

export default function SearchBar({
  placeholder,
  searchTerm,
  onSearchTermChange,
}: SearchBarProps) {
  const [loading, setLoading] = React.useState(false);
  const t = useTranslations("searchBar");

  const propertyOptions = [
    { value: "Buy Property in Turkey", label: t("options.buyProperty") },
    { value: "Start a Company in Turkey", label: t("options.startCompany") },
    { value: "Apply for Turkish Citizenship", label: t("options.applyCitizenship") },
    { value: "Get a Turkish Residence Permit", label: t("options.getResidence") },
    { value: "Study in Turkey as an International Student", label: t("options.study") },
    { value: "Move to Turkey With My Family", label: t("options.moveFamily") },
    { value: "Open a Bank Account in Turkey", label: t("options.openBank") },
    { value: "Work Legally in Turkey", label: t("options.work") },
    { value: "Receive Medical Treatment in Turkey", label: t("options.medical") },
    { value: "Transfer and Exchange Foreign Income", label: t("options.transferIncome") },
    { value: "Explore Turkey Through Tours and Leisure Activities", label: t("options.explore") }
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSearchTermChange(newValue);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.search_bar}>
      <div className={styles.input_group}>
        <div className={styles.icon}>{Ques}</div>
        <div className="relative">
          <h6 className="text-slate-500 font-normal -mt-3 mb-1 pl-1">
            {t("label")}
          </h6>
          <select
            className={cn("label-medium", styles.input, "!max-w-xs w-full")}
            value={searchTerm}
            onChange={handleSelectChange}
          >
            {propertyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.breakline} />

      <Link
        href={{
          pathname: "/search",
          query: { query: searchTerm },
        }}
        className={cn("button", styles.button)}
      >
        {t("consultationButton")}
      </Link>
    </div>
  );
}
