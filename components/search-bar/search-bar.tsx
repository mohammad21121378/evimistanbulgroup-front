"use client";

import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Ques, Filter } from "@/constants/icons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";
import FreeConsultation from "@/screens/free-consultation";

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
  const [loading, setLoading] = useState(false);
  const [openConsultation, setOpenConsultation] = useState(false);
  const t = useTranslations("searchBar");

  const propertyOptions = [
    { value: "Get Turkish Citizenship", label: "Get Turkish Citizenship" },
    { value: "Buy Property in Turkey", label: "Buy Property in Turkey" },
    { value: "Sell My Property", label: "Sell My Property" },
    { value: "Rent a Property", label: "Rent a Property" },
    { value: "Apply for a Residence Permit", label: "Apply for a Residence Permit" },
    { value: "Work in Turkey", label: "Work in Turkey" },
    { value: "Study in Turkey", label: "Study in Turkey" },
    { value: "Start a Company / Do Business", label: "Start a Company / Do Business" },
    { value: "Open a Bank Account or Get Credit", label: "Open a Bank Account or Get Credit" },
    { value: "Transfer Money", label: "Transfer Money" },
    { value: "Get Medical Treatment in Turkey", label: "Get Medical Treatment in Turkey" },
    { value: "Relocate with My Family", label: "Relocate with My Family" },
    { value: "Explore Tours & Leisure Activities", label: "Explore Tours & Leisure Activities" },
    { value: "Ask About Something Else", label: "Ask About Something Else" },
  ];

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSearchTermChange(newValue);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.search_bar}>
        <div className={styles.input_group}>
          <div className={styles.icon}>{Ques}</div>
          <div className="relative">
            <h6 className="text-slate-500 font-normal -mt-3 mb-1 pl-1">
              {t("label")}
            </h6>
            <select
              className={cn("label-medium", styles.input, "!max-w-xs w-full underline underline-offset-2 cursor-pointer")}
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


        <Button
          size="xl"
          onClick={() => setOpenConsultation(true)}
        >
          {t("consultationButton")}
        </Button>
      </div>
      <FreeConsultation setInitialOpen={setOpenConsultation} initialOpen={openConsultation} />
    </>
  );
}
