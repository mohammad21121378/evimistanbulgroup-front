import React from "react";
import styles from "./related-properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import { ArrowRight } from "@/constants/icons";
import Link from "next/link";

interface RelatedPropertiesProps {
  item: any;
}

export default function RelatedProperties({ item }: RelatedPropertiesProps) {
  const allListings = Listings.flatMap(
    (listingCategory) => listingCategory.items,
  );

  const filteredListings = allListings.filter(
    (listing) => listing.id !== item.id && listing.category === item.category,
  );

  // Limit to 3 related listings
  const relatedListings = filteredListings.slice(0, 3);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
          <Heading type="heading-3">Similar Properties</Heading>
          </h2>

          <Link href="/properties-for-sale-in-turkey" className={cn("button button-primary")}>
          View All Similar Properties {ArrowRight}
          </Link>
        </div>

        <div className={styles.properties}>
          {/* {relatedListings.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
