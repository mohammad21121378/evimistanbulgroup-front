"use client";

import React from "react";
import styles from "./benefits.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Checkmark } from "@/constants/icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

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
            <Heading type="heading-3">{benefit.title}</Heading>
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

            <Link href="/about" className={cn("button", styles.button)}>
              {t("learnMore")}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
