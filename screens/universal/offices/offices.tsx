"use client";

import React from "react";
import cn from "classnames";
import styles from "./offices.module.css";
import TextMarquee from "@/components/text-marquee";
import { Heading } from "@/components/typography";
import { useTranslations } from "next-intl";

const top_cities = [
  { name: "KUZU GRUP", src: "kuzu-grup.png" },
  { name: "・", src: "" },
  { name: "Ağaoğlu YAPI MİMAR", src: "agaoglu-yapi-mimar.png" },
  { name: "・", src: "" },
  { name: "SINPAS", src: "sinpas.png" },
  { name: "・", src: "" },
  { name: "AVRUPA", src: "avrupa.png" },
  { name: "・", src: "" },
  { name: "ÖZAK HAYAT DEĞER", src: "ozak-hayat-deger.png" },
  { name: "・", src: "" },
  { name: "EMLAKKONUT", src: "emlakkonut.png" },
  { name: "・", src: "" },
];

const bottom_cities = [
  { name: "TAHİNCİOĞLU", src: "tahincioglu.png" },
  { name: "・", src: "" },
  { name: "nural GYO", src: "nural-gyo.png" },
  { name: "・", src: "" },
  { name: "dumankaya", src: "dumankaya.png" },
  { name: "・", src: "" },
  { name: "SURYAPI", src: "suryapi.png" },
  { name: "・", src: "" },
  { name: "fuzul GYO", src: "fuzul-gyo.png" },
  { name: "・", src: "" },
  { name: "kiler GYO", src: "kiler-gyo.png" },
  { name: "・", src: "" },
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
              item.name === "・" ? (
                <Heading key={index} type="heading-3" className={styles.marquee_text}>
                  {item.name}
                </Heading>
              ) : (
                <div key={index} className="relative">
                  <img
                    src={`/images/realestate/${item.src}`}
                    alt={item.name}
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
              item.name === "・" ? (
                <Heading key={index} type="heading-3" className={styles.marquee_text}>
                  {item.name}
                </Heading>
              ) : (
                <div key={index} className="relative">
                  <img
                    src={`/images/realestate/${item.src}`}
                    alt={item.name}
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
