import React from "react";
import cn from "classnames";
import styles from "./highlights-and-features.module.css";
import { Heading } from "@/components/typography";
import Link from "next/link";
import HighlightsAndFeaturesListing from "@/components/highlights-and-features-listing";
import {  useHighlights } from "@/constants/highlights-and-features.constants";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Button from "@/components/ui/Button";

export default function HighlightsAndFeatures() {
  const t = useTranslations("HighlightsAndFeatures");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>

            <Heading type="heading-3" className="xl:text-nowrap">{t("title")}</Heading>
            
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("description")}
            </div>
          </div>

          <Button href="/properties-for-sale-in-turkey" flex size="auto">
            {t("viewAll")} {ArrowRight}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {useHighlights()?.map((item, index) => (
            <HighlightsAndFeaturesListing key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
