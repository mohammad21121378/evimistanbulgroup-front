"use client";

import React, {useEffect, useState} from "react";
import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import { Listings, Tabs } from "@/constants/mock";
import { Dropdown } from "@/components/elements";
import PropertyListing from "@/components/property-listing";
import {useLocale, useTranslations} from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";
import classNames from "classnames";
import fetchProperties from "@/helpers/api/property/properties";
import {PropertyRawType} from "../../../types/Property";


interface PropertyResponse {
  properties:PropertyRawType[]
}

export default function LatestListings() {
  const t = useTranslations("LatestListings");
  const [listings, setListings] = useState([]);
  const locale = useLocale();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const listings = await fetchProperties(3, 1, {},locale) as PropertyResponse;

        setListings(listings?.properties);
      } catch (error) {
        console.error("", error);
      }
    };

    getArticles();
  }, [locale]);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
          <h2 className={classNames("heading-3", styles.title)}>
              {t("heading")}
            </h2>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("subheading")}
            </div>
          </div>

            <Button href="/properties-for-sale-in-turkey" className={cn( styles.button)} flex size="auto">
            {t("viewAll")} {ArrowRight}
            </Button>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.listings}>
             {
               listings.map((item) => (
                 <PropertyListing key={item.id} item={item} />
             ))
             }
          </div>
        </div>
      </div>
    </section>
  );
}
