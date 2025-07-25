'use client';

import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";

const categories = [
  { id: 176, key: "apartment", },
  { id: 177, key: "villa" },
  { id: 178, key: "commercial" },
  { id: 179, key: "penthouse" },
  { id: 181, key: "landForSale" },
  { id: 182, key: "hotelForSale" },
];

export default function Categories() {
  const t = useTranslations("Categories");

  const prefixLink = '/properties-for-sale-in-turkey?type='

  return (
    <section className="section">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.title_container}>

          <h2 className="heading-3">{t("heading")}</h2>
          
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("subtitle")}
            </div>
          </div>

          <Button href={`${prefixLink}all`} flex size="auto">
            {t("viewAll")} {ArrowRight}
          </Button>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <Link href={`${prefixLink}${category.id}`} key={category.id} className={styles.category}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
