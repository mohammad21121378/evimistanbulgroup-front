"use client";

import React from "react";
import styles from "./newsletter.module.css";
import cn from "classnames";
import { Bag, Notification } from "@/constants/icons";
import { useTranslations } from "next-intl";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";

const icons = [Bag, 
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15H7C5.93913 15 4.92172 15.4214 4.17157 16.1716C3.42143 16.9217 3 17.9391 3 19V21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM14 18.9999L18.581 14.4189C19.1333 13.8667 20.0287 13.8667 20.581 14.4189C21.1333 14.9712 21.1333 15.8667 20.581 16.4189L16 20.9999H14V18.9999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  , 
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10L12 14L16 10M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C10.6868 21 9.38642 20.7413 8.17317 20.2388C6.95991 19.7362 5.85752 18.9997 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
, 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21M16.025 3.30078C17.4777 3.90028 18.5001 5.33068 18.5001 6.99987C18.5001 8.68196 17.4618 10.1215 15.9912 10.7127M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
];

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
                  <Button href={`/our-services/${item.link}`} size="auto" className={cn(styles.button)}>
                    {item.button}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
