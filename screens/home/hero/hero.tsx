"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Heading, Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { useTranslations } from "next-intl";
import SuggestedServices from "../suggested-services";
import classNames from "classnames";

export default function Hero() {
  const t = useTranslations("home.hero");
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/EvimIstanbul Group - Istanbul Turkey.webp"
          alt="EvimIstanbul Group - Istanbul Turkey"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.overlay} />

        <div className={cn("container", styles.title_box)}>
          <HeroTitle size="hero-lg" className={styles.title}>
            {t("title")}
          </HeroTitle>

          <Heading type="heading-5" className={classNames(styles.sub_title, '!font-normal sm:!leading-[2.85rem]')}>
            {t.rich('subtitle', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </Heading>
        </div>

        <SearchBar
          placeholder={t("searchPlaceholder")}
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
        />

      </div>

      <SuggestedServices />

      <section className={cn("section sm:!pt-10 !pt-0", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Heading type="heading-4">{t("sectionHeading")}</Heading>

            <div className={styles.stack}>
              <div className={styles.card}>
                <div className={cn("paragraph-medium font-bold", styles.card_subtitle)}>
                  {t("cardSubtitle")}
                </div>
                <div className={cn("heading-3")}>{t("cardValue")}</div>
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
