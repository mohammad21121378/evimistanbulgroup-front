"use client";

import React from "react";
import styles from "./partners.module.css";
import cn from "classnames";
import Image from "next/image";
import { Heading } from "@/components/typography";
import { ArrowRight, Bankrate, Corning, Flexport } from "@/constants/icons";
import { useTranslations } from "next-intl";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";
import { motion } from 'framer-motion'
import { blurAndFadeAnimate, viewportMargin } from "@/constants/animation";

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <h2 className={cn("h2 heading-3", styles.title)}>
            {t("title")}
          </h2>
          <p className={cn("paragraph-2x-large font-bold", styles.text)}>
            {t("subtitle")}
          </p>
          <p className={cn("paragraph-large", styles.text)}>
            {t("description")}
          </p>
          <Button href="/our-story" className={cn(styles.button)} flex>
            {t("button")} {ArrowRight}
          </Button>
        </div>
        <div className={styles.partners}>
          <motion.div
            variants={blurAndFadeAnimate()}
            viewport={viewportMargin}
            whileInView={"show"}
            initial="hidden"
            className={styles.image_container}>
            <Image
              src="/images/partners/flexport.webp"
              alt="partners"
              layout="fill"
              objectFit="cover"
            />
            {/* <div className={styles.logo}>{Flexport}</div> */}
          </motion.div>

          <div className={styles.side_images}>
            <motion.div
              variants={blurAndFadeAnimate(1)}
              whileInView={"show"}
            initial="hidden"
              viewport={viewportMargin}
              className={styles.image_container}>
              <Image
                src="/images/partners/check.webp"
                alt="partners"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              variants={blurAndFadeAnimate(1)}
              whileInView={"show"}
            initial="hidden"
              viewport={viewportMargin}
              className={styles.image_container}>
              <Image
                src="/images/partners/corning.webp"
                alt="partners"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
