'use client'

import React from "react";
import cn from "classnames";
import styles from "./highlights-and-features.module.css";
import { motion } from 'framer-motion'
import HighlightsAndFeaturesListing from "@/components/highlights-and-features-listing";
import { useHighlights } from "@/constants/highlights-and-features.constants";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Button from "@/components/ui/Button";
import { fadeinAnimationWithDelay } from "@/constants/animation";

export default function HighlightsAndFeatures() {
  const t = useTranslations("HighlightsAndFeatures");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>

            <h2 className="heading-3 xl:text-nowrap">{t("title")}</h2>

            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("description")}
            </div>
          </div>

          <Button href="/properties-for-sale-in-turkey?feature=all" flex size="auto">
            {t("viewAll")} {ArrowRight}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {useHighlights()?.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeinAnimationWithDelay(index * .4)}
              viewport={{once: true, amount:.2}}
            >
              <HighlightsAndFeaturesListing key={index} item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
