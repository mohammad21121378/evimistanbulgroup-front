"use client";

import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Ques, Filter } from "@/constants/icons";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";
import { useConsultationStore } from "@/stores/consultationStore";
import { topics } from "@/screens/free-consultation/constants";
import { motion } from 'framer-motion'
import { viewportMargin } from "@/constants/animation";

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

  const [selected, setSelected] = useState<string>(topics[0]);
  const { onOpen, setInitialValues } = useConsultationStore();

  const t = useTranslations("searchBar");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelected(newValue)
  };

  const handleConsultationClick = () => {
    setInitialValues({ topic: selected });
    onOpen();
  };

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.7,
        duration: .9
      }
    },
  }

  return (
    <motion.div
      viewport={viewportMargin}
      variants={animationVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.search_bar}>
        <div className={styles.input_group}>
          <div className={styles.icon}>{Ques}</div>
          <div className="relative">
            <div className="text-slate-500 font-normal -mt-3 mb-1 pl-1">
              {t("label")}
            </div>
            <select
              className={cn("label-medium", styles.input, "!max-w-xs w-full underline underline-offset-2 bg-white cursor-pointer")}
              value={selected}
              onChange={handleSelectChange}
            >
              {topics.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.breakline} />
        <Button
          size="xl"
          onClick={handleConsultationClick}
        >
          {t("consultationButton")}
        </Button>
      </div>
    </motion.div>
  );
}
