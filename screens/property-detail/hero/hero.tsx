import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Gallery from "./Gallery";
import { Location2 } from "@/constants/icons";
import { formatNumber } from "@/utils/formatNumber";
import Link from "../../../components/ui/Link";

interface LightboxImage {
  url: string;
  alt: string;
}
type HeroProps = {
  item: {
    title: string;
    location: string;
    parentLocation: string;
    locationID: string;
    parentLocationID: string;
    gallery: LightboxImage[];
    min_price: number;
    max_price: number;
    status: string
  };
};

export default function Hero({ item }: HeroProps) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Breadcrumb
          items={[
            { label: 'Property for Sale in Turkey', href: '/properties-for-sale-in-turkey' },
            { label: item.parentLocation, href: `/properties-for-sale-in-turkey/?location=${item.parentLocationID}` },
            { label: item.location, href: `/properties-for-sale-in-turkey/?location=${item.locationID}` },
            { label: item.title }
          ]}
        />
        <div className={styles.content}>
          <div>
            <h1 className={cn("heading-6")}>{item.title}</h1>
            <div className={cn("paragraph-medium", styles.address)}>
              <div

                  className={cn(
                      "paragraph-medium font-medium flex items-center gap-2.5 underline",
                      styles.address
                  )}
              >

                {Location2}
                <div>
                  <Link
                      href={`/properties-for-sale-in-turkey?location=${item.locationID}`}
                      className={cn(
                          "paragraph-medium font-medium  underline",
                          styles.address
                      )}
                  >

                    {item.location}
                  </Link>,
                  <Link
                      href={`/properties-for-sale-in-turkey?location=${item.parentLocationID}`}
                      className={cn(
                          "paragraph-medium font-medium  underline",
                          styles.address
                      )}
                  >

                    {item.parentLocation}
                  </Link>
                </div>


              </div>
            </div>
          </div>

          <div className={cn("heading-6", styles.price)}>
            {item.min_price && item.max_price ? (
                <>
                  {formatNumber(item.min_price)} MIN – {formatNumber(item.max_price)} MAX
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

        <Gallery  images={item.gallery ?? []} title={item.title}  status={item.status} />
      </div>
    </section>
  );
}
