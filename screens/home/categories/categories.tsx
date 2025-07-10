'use client';

import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";

const categories = [
  { id: 1, key: "apartment" },
  { id: 2, key: "villa" },
  { id: 3, key: "commercial" },
  { id: 4, key: "penthouse" },
  { id: 5, key: "landForSale" },
  { id: 6, key: "hotelForSale" },
];

export default function Categories() {
  const t = useTranslations("Categories");

  return (
    <section className="section">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">{t("heading")}</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("subtitle")}
            </div>
          </div>

          <Link href="/listings" className="button button-primary">
            {t("viewAll")} {ArrowRight}
          </Link>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <div className={styles.image_container}>
                <Image
                  src={`/images/categories/${category.key}.jpg`}
                  alt={t(`types.${category.key}`)}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.overlay}>
                <div className={cn("heading-6", styles.category_title)}>
                  {t(`types.${category.key}`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
