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
import AnimatedText from "@/components/ui/AnimateText";
import { fadeinAnimation, viewportMargin, viewportMarginSm } from "@/constants/animation";
import { motion } from 'framer-motion'
import { useMediaQuery } from "react-responsive";


export default function Hero() {
  const t = useTranslations("home.hero");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const variantsSubtitle = {
    hidden: { opacity: 0, scale: .99 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 2.7,
        duration: .9,
      },
    },
  };
  
  const animationVariants = (index: number) => {
    return {
      hidden: { opacity: 0, scale: .99 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: isMobile ? 0 : index * .25,
          duration: .5,
          ease: [0.65, 0, 0.35, 1],
        }
      },
    }
  };
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
            <AnimatedText title={t("title")} />
          </HeroTitle>


          <motion.div
            variants={variantsSubtitle}
            initial="hidden"
            animate="visible"
          >
            <Heading type="heading-5" className={classNames(styles.sub_title, '!font-normal sm:!leading-[2.85rem]')}>
              {t.rich('subtitle', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </Heading>

          </motion.div>

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

            <motion.div
              viewport={viewportMarginSm}
              variants={fadeinAnimation}
              initial="hidden"
              whileInView="show">
              <Heading type="heading-4">{t("sectionHeading")}</Heading>
            </motion.div>

            <div className={styles.stack}>

              <motion.div
                viewport={viewportMargin}
                variants={animationVariants(1)}
                initial="hidden"
                whileInView="show"
                className={styles.card}>
                <div className={cn("paragraph-medium font-bold", styles.card_subtitle)}>
                  {t("cardSubtitle")}
                </div>
                <div className={cn("heading-3")}>{t("cardValue")}</div>
              </motion.div>

              <motion.div
                viewport={viewportMargin}
                variants={animationVariants(2)}
                initial="hidden"
                whileInView="show"
                className={styles.card}>
                <Image
                  src="/images/intro.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
