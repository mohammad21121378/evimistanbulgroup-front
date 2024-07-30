import React from "react";
import styles from "./services.module.css";
import cn from "classnames";
import {
  Bag,
  BubbleChart,
  Building,
  DoubleBed,
  House,
  TrendUp,
} from "@/constants/icons";

const services = [
  {
    id: 1,
    icon: House,
    title: "Buying a home",
    description:
      "We provide expert guidance and support to help you secure the best mortgage rates and terms.",
  },
  {
    id: 2,
    icon: TrendUp,
    title: "Selling your property",
    description:
      "We offer comprehensive services to sell your property quickly and at the best price.",
  },
  {
    id: 3,
    icon: Building,
    title: "Property management",
    description:
      "Our property managament services ensure that your investment is well-maintainted and profitable.",
  },
  {
    id: 4,
    icon: Bag,
    title: "Investment consultation",
    description:
      "Our investment consultants provide expert advice and strategic planning to help you build.",
  },
  {
    id: 5,
    icon: BubbleChart,
    title: "Market analysis",
    description:
      "Our market analysis services provide you with detailed insights into the current market trends.",
  },
  {
    id: 6,
    icon: DoubleBed,
    title: "Home staging",
    description:
      "Our home staging services enhace the appeal of your propeeryy, making it more attractive.",
  },
];

export default function Services() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Our services</div>

        <div className={styles.services}>
          {services.map((service) => (
            <div key={service.id} className={styles.service}>
              <div className={cn("gradient-bubble")}>{service.icon}</div>
              <div className={cn("heading-6", styles.service_title)}>
                {service.title}
              </div>
              <div className={cn("paragraph-medium", styles.service_subtitle)}>
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
