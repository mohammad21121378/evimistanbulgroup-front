import React from "react";
import styles from "./values.module.css";
import cn from "classnames";
import { Bag } from "@/constants/icons";

const values = [
  {
    id: 1,
    icon: Bag,
    title: "Integrity",
    description:
      "We conduct our business with the highest level of honesty and ethical standars, ensuring that our clients can trust us to represent their best interest.",
  },
  {
    id: 2,
    icon: Bag,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from our clients interactions to the results we deliver. Our commitment to quality set us apart.",
  },
  {
    id: 3,
    icon: Bag,
    title: "Innovation",
    description:
      "We embrace innovation and leverage the latest technology to provide our clients with cutting-edge solutions and insights.",
  },
  {
    id: 4,
    icon: Bag,
    title: "Community",
    description:
      "We are dedicated to making a positive impact in the communities we serve. We believe in giving back and supporting local initiatives.",
  },
];

export default function Values() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small")}>OUR VALUES</div>

        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.id} className={styles.value}>
              <div className={cn("gradient-bubble")}>{value.icon}</div>

              <div className={cn("heading-6", styles.value_title)}>
                {value.title}
              </div>
              <div className={cn("paragraph-medium", styles.value_description)}>
                {value.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
