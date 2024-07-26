"use client";

import React from "react";
import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Listings, Tabs } from "@/constants/mock";
import { Dropdown } from "@/components/elements";

export default function LatestListings() {
  const [selectedCategory, setSelectedCategory] = React.useState(Tabs[0].name);

  const dropdownOptions = Tabs.map((tab) => ({
    value: tab.name,
    label: tab.name,
  }));

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <Heading type="heading-3" className={styles.title}>
              Latest Property Listings
            </Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              Discover the newest additions to our exclusive real estate
              portfolio.
            </div>
          </div>

          <button className={cn("button", styles.button)}>
            View All Listings
          </button>
        </div>

        <div className={styles.wrapper}>
          <Dropdown
            options={dropdownOptions}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <div className={styles.tabs}>
            {Tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn("label-medium", styles.tab, {
                  [styles.active]: tab.name === selectedCategory,
                })}
                onClick={() => setSelectedCategory(tab.name)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          <div className={styles.listings}>
            {Listings.filter(
              (listing) => listing.category === selectedCategory,
            ).flatMap((listing) =>
              listing.items.map((item) => (
                <div key={item.id} className={styles.listing}>
                  <div className={styles.img_holder}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />

                    <div
                      className={cn("paragraph-small", styles.listing_price)}
                    >
                      {item.price}
                    </div>
                  </div>
                  <div className={styles.listing_wrapper}>
                    <div className={cn("heading-6", styles.listing_title)}>
                      {item.title}
                    </div>
                    <div
                      className={cn(
                        "paragraph-medium",
                        styles.listing_description,
                      )}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
