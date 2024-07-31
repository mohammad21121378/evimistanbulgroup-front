import React from "react";
import styles from "./gallery.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

export default function Gallery() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <Heading type="heading-3">Explore Our Stunning Properties</Heading>
      </div>
    </section>
  );
}
