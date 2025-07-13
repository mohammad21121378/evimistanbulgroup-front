"use client";

import React from "react";
import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import { Listings, Tabs } from "@/constants/mock";
import { Dropdown } from "@/components/elements";
import PropertyListing from "@/components/property-listing";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Link from "@/components/ui/Link";

export default function LatestListings() {
  const t = useTranslations("LatestListings");
  const [selectedCategory, setSelectedCategory] = React.useState(Tabs[0].name);

  const dropdownOptions = Tabs.map((tab) => ({
    value: tab.name,
    label: tab.name,
  }));

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <Heading type="heading-3" className={styles.title}>
              {t("heading")}
            </Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {t("subheading")}
            </div>
          </div>

          <Link href="/listings">
            <button className={cn("button", styles.button)}>
            {t("viewAll")} {ArrowRight}
            </button>
          </Link>
        </div>

        <div className={styles.wrapper}>
          {/* <Dropdown
            className={styles.dropdown}
            options={dropdownOptions}
            value={selectedCategory}
            onChange={handleDropdownChange}
          /> */}
          <div className={styles.listings}>
            {Listings.filter(
              (listing) => listing.category === selectedCategory
            ).flatMap((listing) =>
              listing.items.map((item) => (
                <PropertyListing key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
