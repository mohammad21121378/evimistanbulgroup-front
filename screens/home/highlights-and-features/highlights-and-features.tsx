import React from "react";
import cn from "classnames";
import styles from "./highlights-and-features.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import HighlightsAndFeaturesListing from "@/components/highlights-and-features-listing";
import { highlights } from "@/constants/highlights-and-features.constants";

export default function HighlightsAndFeatures() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Property Highlights & Special Features</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Easily discover properties based on what matters most to you — from high-return investments and citizenship eligibility to luxury finishes, lifestyle benefits, and urgent offers. Use these tags to explore real estate tailored to your goals."
              }
            </div>
          </div>

          <Link href="/listings" className={cn("button button-primary")}>
            View All Highlights
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {highlights.map((item, index) => (<HighlightsAndFeaturesListing item={item} />))}
        </div>
      </div>
    </section>
  );
}
