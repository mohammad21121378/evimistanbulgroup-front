import React from "react";
import cn from "classnames";
import styles from "./guides-and-Insights.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";
import { Insights } from "@/constants/guides-and-Insights.constants";

export default function GuidesAndInsights() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Our Guides & Insights</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Get trusted and updated information on buying property, gaining citizenship, relocating to Turkey, and more — written for international buyers, investors, students, and families."
              }
            </div>
          </div>

          <Link href="/listings" className={cn("button button-primary")}>
          View All  Insights
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          {Insights.map((item, index) => (<GuidesAndInsightsIisting {...item} />))}
        </div>
      </div>
    </section>
  );
}
