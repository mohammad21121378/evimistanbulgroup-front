import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Gallery from "./Gallery";
import { Location2 } from "@/constants/icons";
import { formatNumber } from "@/utils/formatNumber";

type HeroProps = {
  item: {
    title: string;
    location: string;
    images: string[];
    price: number;
  };
};

export default function Hero({ item }: HeroProps) {

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Breadcrumb
          items={[
            { label: 'Property for Sale in Turkey', href: '/properties-for-sale-in-turkey' },
            { label: 'Beylikdüzü', href: '/' },
            { label: '123 Serenity Lane' }
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

          <div className={cn("heading-6", styles.price)}>{formatNumber(item.price)} MIN – {formatNumber(item.price)} MAX</div>
        </div>

        <Gallery images={item.images} title={item.title} />
      </div>
    </section>
  );
}
