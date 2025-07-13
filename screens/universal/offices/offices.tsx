"use client";

import React from "react";
import cn from "classnames";
import styles from "./offices.module.css";
import TextMarquee from "@/components/text-marquee";
import { Heading } from "@/components/typography";
import { useTranslations } from "next-intl";

const top_cities = [
  "KUZU GRUP",
  "・",
  "Ağaoğlu YAPI MİMAR",
  "・",
  "SINPAS",
  "・",
  "AVRUPA",
  "・",
  "ÖZAK HAYAT DEĞER",
  "・",
  "EMLAKKONUT",
  "・",
];

const bottom_cities = [
  "TAHİNCİOĞLU",
  "・",
  "nural GYO",
  "・",
  "dumankaya",
  "・",
  "SURYAPI",
  "・",
  "fuzul GYO",
  "・",
  "kiler GYO",
  "・",
];

export default function Offices() {
  const t = useTranslations("Offices");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <Heading type="heading-3">{t("heading")}</Heading>
          <div className={cn("paragraph-large", styles.subtitle)}>
            {t("subheading")}
          </div>
        </div>
      </div>

      <div className={styles.marquees}>
        <div className={styles.marquee}>
          <TextMarquee>
            {top_cities.map((item, index) =>
              item === "・" ? (
                <Heading key={index} type="heading-3" className={styles.marquee_text}>
                  {item}
                </Heading>
              ) : (
                <div key={index} className="relative">
                  <img
                    src={`/images/realestate/${item}.png`}
                    alt={item}
                    className="w-full max-h-20"
                  />
                </div>
              )
            )}
          </TextMarquee>
        </div>

        <div className={styles.marquee}>
          <TextMarquee direction="right">
            {bottom_cities.map((item, index) =>
              item === "・" ? (
                <Heading key={index} type="heading-3" className={styles.marquee_text}>
                  {item}
                </Heading>
              ) : (
                <div key={index} className="relative">
                  <img
                    src={`/images/realestate/${item}.png`}
                    alt={item}
                    className="w-full max-h-20"
                  />
                </div>
              )
            )}
          </TextMarquee>
        </div>
      </div>
    </section>
  );
}
