import React from "react";
import cn from "classnames";
import styles from "./offices.module.css";
import TextMarquee from "@/components/text-marquee";
import { Heading } from "@/components/typography";

const top_cities = [
  "Los Angeles",
  "・",
  "New York",
  "・",
  "San Francisco",
  "・",
  "London",
  "・",
];

const bottom_cities = [
  "Berlin",
  "・",
  "Paris",
  "・",
  "Tokyo",
  "・",
  "Sydney",
  "・",
];

export default function Offices() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Offices</div>
      </div>

      <div className={styles.marquees}>
        <TextMarquee>
          {top_cities.map((city) => (
            <Heading
              key={city}
              type="heading-3"
              className={styles.marquee_text}
            >
              {city}
            </Heading>
          ))}
        </TextMarquee>

        <TextMarquee direction="right">
          {bottom_cities.map((city) => (
            <Heading
              key={city}
              type="heading-3"
              className={styles.marquee_text}
            >
              {city}
            </Heading>
          ))}
        </TextMarquee>
      </div>
    </section>
  );
}
