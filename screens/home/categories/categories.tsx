import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Apartment",
  },
  {
    id: 2,
    title: "Villa",
  },
  {
    id: 3,
    title: "Commercial",
  },
  {
    id: 4,
    title: "Penthouse",
  },
  {
    id: 5,
    title: "Land for Sale",
  },
  {
    id: 6,
    title: "Hotel for Sale",
  },
];

export default function Categories() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Browse Property Types in Turkey</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "From modern apartments to luxury villas, commercial spaces to hotel investments — explore curated property types across Turkey’s top cities."
              }
            </div>
          </div>

          <Link href="/listings" className={cn("button button-primary")}>
          View All Types 
          </Link>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <div className={styles.image_container}>
                <Image
                  src={`/images/categories/${category.title}.jpg`}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.overlay}>
                <div className={cn("heading-6", styles.category_title)}>
                  {category.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
