"use client";

import React from "react";
import cn from "classnames";
import styles from "./guides-and-Insights-view.module.css";
import { Heading } from "@/components/typography";
import Link from "next/link";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";
import { useInsights } from "@/constants/guides-and-Insights.constants";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Button from "../ui/Button";

type Props = {
  title?: string;
  description?: string;
  button?: {
    text?: string;
    href?: string;
  };
}

export default function GuidesAndInsightsView({
  title,
  description,
  button,
}: Props) {
  const t = useTranslations("GuidesAndInsights");

  return (
    <section className={cn("section")}>
      <div className="container">
        <div className={styles.content}>
          
          <div className={styles.title_container}>
            <Heading type="heading-3">{title}</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {description}
            </div>
          </div>

          <Button href={button?.href ? button?.href : '#'} flex size="auto">
            {button?.text} {ArrowRight}
          </Button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {useInsights()?.map((item, index) => (
            <GuidesAndInsightsIisting key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
