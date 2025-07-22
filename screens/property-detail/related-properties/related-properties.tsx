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
  related: any;
}

export default function RelatedProperties({ item,related }: RelatedPropertiesProps) {


  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
          <Heading type="heading-3">Similar Properties</Heading>
          </h2>

          <Link href={`/properties-for-sale-in-turkey/?type=${item.categoryID}`} className={cn("button button-primary")}>
          View All Similar Properties {ArrowRight}
          </Link>
        </div>

        <div className={styles.properties}>
          { related.length > 0 && related.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          )) }
        </div>
      </div>
    </section>
  );
}
