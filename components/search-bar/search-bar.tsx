import React from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Ques, Filter } from "@/constants/icons";
import Link from "next/link";

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


  const propertyOptions = [
    { value: "", label: "Buy Property in Turkey" },
    { value: "Buy Property in Turkey", label: "Buy Property in Turkey" },
    { value: "Start a Company in Turkey", label: "Start a Company in Turkey" },
    { value: "Apply for Turkish Citizenship", label: "Apply for Turkish Citizenship" },
    { value: "Get a Turkish Residence Permit", label: "Get a Turkish Residence Permit" },
    { value: "Study in Turkey as an International Student", label: "Study in Turkey as an International Student" },
    { value: "Move to Turkey With My Family", label: "Move to Turkey With My Family" },
    { value: "Open a Bank Account in Turkey", label: "Open a Bank Account in Turkey" },
    { value: "Work Legally in Turkey", label: "Work Legally in Turkey" },
    { value: "Receive Medical Treatment in Turkey", label: "Receive Medical Treatment in Turkey" },
    { value: "Transfer and Exchange Foreign Income", label: "Transfer and Exchange Foreign Income" },
    { value: "Explore Turkey Through Tours and Leisure Activities", label: "Explore Turkey Through Tours and Leisure Activities" },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSearchTermChange(newValue);

    setLoading(true);

    // شبیه‌سازی عملیات جستجو با تایمر
    setTimeout(() => {
      setLoading(false);
    }, 1000); // شبیه‌سازی زمان بارگذاری 1 ثانیه
  };

  return (
    <div className={styles.search_bar}>
      <div className={styles.input_group}>
        <div className={styles.icon}>{Ques}</div>
        <div className="relative">
          <h6 className={'text-slate-500 font-normal -mt-3 mb-1 pl-1'}>
            I want to
          </h6>
          <select
            className={cn("label-medium", styles.input, '!max-w-xs w-full')}
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

        {/* <div className={styles.divider} /> */}
        {/* {loading ? (
          <div className={styles.spinner} />
        ) : (
          <div className={styles.icon}>{Filter}</div>
        )} */}
      </div>

      <div className={styles.breakline} />

      <Link
        href={{
          pathname: "/search",
          query: { query: searchTerm },
        }}
        className={cn("button", styles.button)}
      >
        Book A Free Consultation
      </Link>
    </div>
  );
}