"use client";

import React from "react";
import styles from "./benefits.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Checkmark } from "@/constants/icons";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function Benefits() {
  const t = useTranslations("Benefits");

  const benefits = [
    {
      id: 1,
      title: t("section1.title"),
      description: t("section1.description"),
      image: "/images/benefit-1.webp",
      items: [
        { id: 1, title: t("section1.items.0") },
        { id: 2, title: t("section1.items.1") },
        { id: 3, title: t("section1.items.2") },
      ],
    },
    {
      id: 2,
      title: t("section2.title"),
      description: t("section2.description"),
      image: "/images/benefit-2.webp",
      items: [
        { id: 1, title: t("section2.items.0") },
        { id: 2, title: t("section2.items.1") },
        { id: 3, title: t("section2.items.2") },
      ],
    },
  ];

  return (
    <section className={cn("section")}>
      {benefits.map((benefit) => (
        <div key={benefit.id} className={cn("container", styles.container)}>
          <div className={styles.image}>
            <Image
              src={benefit.image}
              alt="Benefits"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.content}>
          <h2 className="heading-3 whitespace-pre-line">{benefit.title}</h2>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {benefit.description}
            </div>

            <ul className={styles.list}>
              {benefit.items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.icon}>{Checkmark}</div>
                  <div className={cn("paragraph-medium", styles.text)}>
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>

            <Button href="/client-stories" className={cn(styles.button)}>
              {t("learnMore")}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
