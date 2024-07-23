import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { Heading, Hero } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";

export default function Header() {
  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.overlay} />

        <Hero size="hero-lg" className={styles.title}>
          Find Your Next Home Sweet Home.
        </Hero>

        <SearchBar placeholder="Enter an address, neighborhood, city or ZIP code" />
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Heading type="heading-3">
              Find your dream home with our curated listings and expert
              guidance.
            </Heading>

            <div className={styles.stack}>
              <div className={styles.card}>
                <div className={cn("paragraph-large", styles.card_subtitle)}>
                  Property Investments
                </div>
                <div className={cn("heading-3")}>$1B+</div>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/header-background.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
