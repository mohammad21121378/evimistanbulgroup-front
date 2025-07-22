import React from "react";
import styles from "./related-properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import { ArrowRight } from "@/constants/icons";
import Link from "next/link";

interface RelatedPropertiesProps {
  item: any;
  related: any;
}

export default function RelatedProperties({ item,related }: RelatedPropertiesProps) {


  return (
    <section className={cn("section")}>
      <div className={cn("container")}>


      </div>
    </section>
  );
}
