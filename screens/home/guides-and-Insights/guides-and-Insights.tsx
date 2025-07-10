"use client";

import React from "react";
import cn from "classnames";
import styles from "./guides-and-Insights.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";
import { useInsights } from "@/constants/guides-and-Insights.constants";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";

export default function GuidesAndInsights() {
  const t = useTranslations("GuidesAndInsights");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">{t("title")}</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("description")}
            </div>
          </div>

          <Link href="/listings" className={cn("button button-primary")}>
            {t("button")} {ArrowRight}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          {useInsights()?.map((item, index) => (
            <GuidesAndInsightsIisting key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
