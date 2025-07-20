import React from "react";
import styles from "./properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import Link from "@/components/ui/Link";
import { ArrowRight } from "@/constants/icons";

export default function Properties() {
  const allListings = Listings.flatMap(
    (listingCategory) => listingCategory.items,
  );

  const relatedListings = allListings.slice(0, 3);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
            <Heading type="heading-3">Latest Property Listings</Heading>
          </h2>


          <Link href="/properties-for-sale-in-turkey">
            <button className={cn("button button-primary")}>
              View All Properties
              {ArrowRight}
            </button>
          </Link>
        </div>

        <div className={styles.properties}>
          {relatedListings.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
