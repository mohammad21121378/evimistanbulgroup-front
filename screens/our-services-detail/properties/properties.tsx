import React, {useEffect, useState} from "react";
import styles from "./properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import Link from "@/components/ui/Link";
import { ArrowRight } from "@/constants/icons";
import {PropertyRawType} from "../../../types/Property";
import {useLocale} from "next-intl";
import fetchProperties from "@/helpers/api/property/properties";

interface PropertyResponse {
  properties:PropertyRawType[]
}

export default function Properties() {

  const [listings, setListings] = useState<PropertyRawType[]>([]);
  const locale = useLocale();
  useEffect(() => {
    const getArticles = async () => {
      try {
        const listings = await fetchProperties(3, 1, {},locale) as PropertyResponse;

        setListings(listings ? listings.properties : []);
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
          {
            listings.map((item) => (
                <PropertyListing key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
