import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Gallery from "./Gallery";
import { Location2 } from "@/constants/icons";
import { formatNumber } from "@/utils/formatNumber";

interface LightboxImage {
  url: string;
  alt: string;
}
type HeroProps = {
  item: {
    title: string;
    location: string;
    locationID: string;
    gallery: LightboxImage[];
    min_price: number;
    max_price: number;
  };
};

export default function Hero({ item }: HeroProps) {
  console.info("---------------------- " + item)
  console.error("---------------------- " + item)
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Breadcrumb
          items={[
            { label: 'Property for Sale in Turkey', href: '/properties-for-sale-in-turkey' },
            { label: item.location, href: `/properties-for-sale-in-turkey/?location=${item.locationID}` },
            { label: item.title }
          ]}
        />
        <div className={styles.content}>
          <div>
            <div className={cn("heading-6")}>{item.title}</div>
            <div className={cn("paragraph-medium", styles.address)}>
              {Location2}
              {item.location}
            </div>
          </div>

          <div className={cn("heading-6", styles.price)}>
            {item.min_price && item.max_price ? (
                <>
                  {formatNumber(item.min_price)} MIN –– {formatNumber(item.max_price)} MAX
                </>
            ) : item.min_price ? (
                <>
                  {formatNumber(item.min_price)}
                </>
            ) : item.max_price ? (
                <>
                  {formatNumber(item.max_price)}
                </>
            ) : null}
          </div>
        </div>

        <Gallery  images={item.gallery.flat() ?? []} title={item.title} />
      </div>
    </section>
  );
}
