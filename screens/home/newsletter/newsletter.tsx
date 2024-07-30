import React from "react";
import styles from "./newsletter.module.css";
import cn from "classnames";

export default function Newsletter() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Newsletter</div>
      </div>
    </section>
  );
}
