import React from "react";
import styles from "./facts.module.css";
import cn from "classnames";
import { Building, HappyHeart, Medal } from "@/constants/icons";
import { Heading } from "@/components/typography";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

const facts = [
  {
    id: 1,
    icon: HappyHeart,
    title: 98,
    suffix: "%",
    description:
      "With a 98% client satisfaction rate, we don’t just meet expectations — we redefine them. Our clients consistently choose us for our precision, trust, and end-to-end excellence in real estate and citizenship services.",
  },
  {
    id: 2,
    icon: Building,
    title: 500,
    suffix: "+",
    description:
      "With over 500 vetted properties across Turkey’s most sought-after regions, we offer one of the largest exclusive portfolios tailored for investors, families, and international buyers seeking high-value opportunities.",
  },
  {
    id: 3,
    icon: Medal,
    title: 10,
    suffix: "+",
    description:
      "Our team combines over 10 years of cross-border real estate, legal, and investment experience — delivering a seamless, multilingual, and fully compliant journey from property search to title deed.",
  },
];

export default function Facts() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-large", styles.title)}>Facts</div>

        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.id} className={styles.fact}>
              <div className={cn("gradient-bubble")}>{fact.icon}</div>
              <Heading type="heading-3" className={styles.fact_title}>
              <AnimatedCounter to={fact.title} /> {fact.suffix}
              </Heading>
              <div className={cn("paragraph-medium", styles.fact_description)}>
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
