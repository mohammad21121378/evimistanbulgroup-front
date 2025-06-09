"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Heading, Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";

export default function Hero() {
  const [searchTerm, setSearchTerm] = React.useState("");

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

        <div className={cn('container', styles.title_box)}>
          <HeroTitle size="hero-lg" className={styles.title}>
            Invest. Grow. Succeed.
          </HeroTitle>

          <Heading type="heading-5" className={styles.sub_title}>
            Invest in Turkey with Confidence — Whether you're buying property,
            seeking citizenship, starting a business, studying, relocating with family, or receiving medical care — EvimIstanbul® handles every step of your journey from A to Z.
          </Heading>
        </div>

        <SearchBar
          placeholder="Buy Property in Turkey"
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
        />
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className="text-center text-sm font-medium mb-14">
            Looking for Something Else?
          </div>
          <div className={styles.content}>
            <Heading type="heading-4">
              Discover the best opportunities  in Turkey — trusted by global investors, backed by over $500M in investments.
            </Heading>

            <div className={styles.stack}>
              <div className={styles.card}>
                <div className={cn("paragraph-medium font-bold", styles.card_subtitle)}>
                Assets Under Management
                </div>
                <div className={cn("heading-3")}>$500M+</div>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/intro.webp"
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
