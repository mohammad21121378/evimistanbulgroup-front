import React from "react";
import styles from "./mission.module.css";
import cn from "classnames";

export default function Mission() {
  return (
    <section className={cn("section !pb-6")}>
      <div className="container">
        <div className={cn("gap-10", styles.container)}>
          <div className="grid grid-rows-[auto,1fr]">
            <div className={cn("subheading-large")}>ABOUT US</div>
            <div className="bg-slate-200 mt-10 mb-20 rounded-lg"></div>
          </div>

          <div className={styles.content}>
            <p className={cn("paragraph-large", styles.subtitle)}>
              EvimIstanbul Group's story began with a bold vision: to simplify and elevate the experience of real estate investment, relocation, and legal transition for foreigners in Turkey. Founded by real estate strategist Meisam Kheradmand, a seasoned figure in the Turkish property market, EvimIstanbul quickly gained recognition for its hands-on approach, transparency, and cross-border client focus.
            </p>
            <p className={cn("paragraph-large", styles.subtitle)}>
              As demand grew and the landscape became increasingly digital, technology entrepreneur Reza Abbaszadeh, founder of Abbaszadeh Holdings, joined the project to build a future-proof tech infrastructure behind EvimIstanbul’s services. Together, they transformed a traditional consultancy into a fully integrated, AI-enhanced platform — providing streamlined experiences in citizenship acquisition, legal residency, real estate transactions, and lifestyle relocation for global clients.
            </p>
            <p className={cn("paragraph-large", styles.subtitle)}>
              Today, EvimIstanbul Group stands as a trusted partner to hundreds of families, investors, professionals, and students from over 40 countries, offering comprehensive support in English, Arabic, Persian, Russian, and Turkish — all under one roof.
            </p>

            <div className={styles.divider} />

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 py-8">
          <div className="md:col-span-2 text-2xl leading-relaxed py-8 xl:pr-10">

            <p className="mb-10">
              Our Mission is to become the most reliable and client-focused consultancy platform for foreigners seeking a legal, secure, and prosperous life in Turkey — whether through citizenship, residence, property investment, or full family relocation.
            </p>
            <p className="">
              We aim to make complex bureaucratic procedures simple, fast, and stress-free, with transparency at every step.
            </p>
          </div>

          <div className="bg-slate-200 rounded-xl"></div>

        </div>
      </div>
    </section>
  );
}
