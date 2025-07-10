"use client";

import React from "react";
import styles from "./newsletter.module.css";
import cn from "classnames";
import { Bag, Notification } from "@/constants/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

const icons = [Bag, Notification, Bag, Notification];

export default function Newsletter() {
  const t = useTranslations("newsletter");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>
          {t("title")}
        </div>
        <div className={styles.columns}>
          {icons.map((Icon, index) => {
            const item = t.raw(`items.${index}`);
            return (
              <div key={index} className={styles.column}>
                <div className={cn("gradient-bubble")}>
                  {Icon}
                </div>
                <div>
                  <div className={cn("heading-6", styles.text)}>
                    {item.title}
                  </div>
                  <div className={cn("paragraph-medium", styles.subtitle)}>
                    {item.description}
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <Link href="/about" className={cn("button", styles.button)}>
                    {item.button}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
