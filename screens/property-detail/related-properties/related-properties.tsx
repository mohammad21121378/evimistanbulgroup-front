import React from "react";
import styles from "./related-properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import { ArrowRight } from "@/constants/icons";
import Link from "next/link";
import {PropertyRawType} from "../../../types/Property";
import Button from "@/components/ui/Button";

interface RelatedPropertiesProps {
  item: any;
  related: PropertyRawType[];
}

export default function RelatedProperties({ item,related }: RelatedPropertiesProps) {

  if (!related || !related.length) {
    return;
  }

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
          <Heading type="heading-3">Similar Properties</Heading>
          </h2>

          <Button flex size="auto" href={`/properties-for-sale-in-turkey/${item.locationID}/type-${item.categorySlug}`}>
          View All Similar Properties {ArrowRight}
          </Button>
        </div>

        <div className={styles.properties}>
          { related.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          )) }
        </div>
      </div>
    </section>
  );
}
