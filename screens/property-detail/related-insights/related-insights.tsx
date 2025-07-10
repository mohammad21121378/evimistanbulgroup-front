import React from "react";
import styles from "./related-insights.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { ArrowRight } from "@/constants/icons";
import Link from "next/link";
import { useInsights } from "@/constants/guides-and-Insights.constants";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";

export default function RelatedInsights() {

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
            <Heading type="heading-3">Related Guides and Insights</Heading>
          </h2>

          <Link href="/listings" className={cn("button button-primary")}>
            View All  Similar Guides and Insights {ArrowRight}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          {useInsights()?.map((item, index) => (
            <GuidesAndInsightsIisting key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
