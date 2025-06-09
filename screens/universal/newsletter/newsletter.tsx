import React from "react";
import styles from "./newsletter.module.css";
import cn from "classnames";
import { Bag, Notification } from "@/constants/icons";
import { TextField } from "@/components/elements";
import Link from "next/link";

const items = [
  {
    "icon": Bag,
    "title": "Thinking of Starting a Business in Turkey?",
    "description": "As a foreigner, you can legally establish a company in Turkey in just a few days. We handle all paperwork, tax registration, office place and business setup from A to Z.",
    "buttonText": "Learn how it works",
    "link": "/start-business"
  },
  {
    "icon": Notification,
    "title": "Want to Study in Turkey?",
    "description": "We don’t just help you get into a university — we handle your student visa, residence permit, bank account, and housing setup so you can legally live and study in Turkey from day one.",
    "buttonText": "Learn how it works",
    "link": "/study-turkey"
  },
  {
    "icon": Bag,
    "title": "Need Medical Treatment in Turkey?",
    "description": "From advanced treatments and cosmetic procedures to check-ups and surgeries — we handle it all. You’ll get fast-track access to Turkey’s best hospitals, translation support, accommodation, and even a residence permit if needed. Travel for health, return with peace of mind.",
    "buttonText": "Learn how it works",
    "link": "/medical-turkey"
  },
  {
    "icon": Notification,
    "title": "Relocating to Turkey With Your Family?",
    "description": "We turn relocation into a smooth, guided journey — from finding your dream home to enrolling your children in school, getting your family residence permits, and settling into a safe, welcoming community. You focus on your future, we handle the rest.",
    "buttonText": "Learn how it works",
    "link": "/relocate-turkey"
  }
]

export default function Newsletter() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Also we We’ll Guide You if</div>
        <div className={styles.columns}>

        {items.map((item, index) => (
          <div className={styles.column}>

            <div className={cn("gradient-bubble")}>{item.icon}</div>
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
              Learn how it works
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
