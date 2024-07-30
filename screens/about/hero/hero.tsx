import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as Heading } from "@/components/typography";

export default function Hero() {
  return (
    <>
      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.overlay} />

          <Heading size="hero-lg" className={styles.title}>
            Commited to
            <br /> Excellence
          </Heading>
        </div>
      </section>
    </>
  );
}
