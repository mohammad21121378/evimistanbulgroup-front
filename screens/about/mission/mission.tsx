import React from "react";
import styles from "./mission.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

export default function Mission() {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("subheading-small")}>ABOUT US</div>
        <div className={styles.content}>
          <div className={cn("paragraph-large", styles.subtitle)}>
            We are passionate about helping our clients achieve their real
            estate dreams. With a team of dedicated professionals and a
            commitment to integrity, we provide exceptional service and
            expertise in every transaction.
          </div>

          <div className={styles.divider} />

          <Heading type="heading-3">
            Our mission is to provide unparallaled real estate services that
            exceed our clients expectations.
          </Heading>
        </div>
      </div>
    </section>
  );
}
