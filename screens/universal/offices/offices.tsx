import React from "react";
import cn from "classnames";
import styles from "./offices.module.css";
import TextMarquee from "@/components/text-marquee";
import { Heading } from "@/components/typography";
import Image from "next/image";

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
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
      <div className={styles.title_container}>
            <Heading type="heading-3">Our Network in Real Estate</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Access properties developed by Turkey’s most reputable construction and real estate brands"
              }
            </div>
          </div>
      </div>

      <div className={styles.marquees}>
        <TextMarquee>
          {top_cities.map((item) => (
            item === "・" ?
            <Heading
              key={item}
              type="heading-3"
              className={styles.marquee_text}
            >
              {item}
            </Heading>
            :
            <div className="relative">
              <img src={`/images/realestate/${item}.png`} alt={item} className="w-full max-h-20" />
            </div>
          ))}
        </TextMarquee>

        <TextMarquee direction="right">
          {bottom_cities.map((item) => (
            item === "・" ?
            <Heading
              key={item}
              type="heading-3"
              className={styles.marquee_text}
            >
              {item}
            </Heading>
            :
            <div className="relative">
              <img src={`/images/realestate/${item}.png`} alt={item} className="w-full max-h-20" />
            </div>
          ))}
        </TextMarquee>
      </div>
    </section>
  );
}
