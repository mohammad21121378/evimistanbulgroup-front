import React from "react";
import styles from "./benefits.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Checkmark } from "@/constants/icons";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Why Choose EvimIstanbul?",
    description:
      "EvimIstanbul empowers international clients to confidently buy property in Turkey — including Istanbul, Antalya, and İzmir — by providing verified listings, expert guidance, and full-service support. From legal contracts to residence permits or Turkish citizenship by investment, we ensure a secure and seamless experience.",
    image: "/images/benefit-1.webp",
    items: [
      {
        id: 1,
        title: "Verified properties across Turkey",
      },
      {
        id: 2,
        title: "Expert legal & relocation support for foreign buyers",
      },
      {
        id: 3,
        title: "Citizenship & residency guidance for eligible clients",
      },
    ],
  },
  {
    id: 2,
    title: "Benefits of Choosing EvimIstanbul",
    description:
      "Whether you're investing for citizenship, relocating as a family, or studying in Turkey, EvimIstanbul offers personalized, transparent, and secure real estate solutions in top Turkish cities.",
    image: "/images/benefit-2.webp",
    items: [
      {
        id: 1,
        title: "Citizenship-eligible properties",
      },
      {
        id: 2,
        title: "Legal and financial transparency — no hidden costs",
      },
      {
        id: 3,
        title: "$ 500M+ in successful transactions with global clients",
      },
    ],
  },
];

export default function Benefits() {
  return (
    <section className={cn("section")}>
      {benefits.map((benefit) => (
        <div key={benefit.id} className={cn("container", styles.container)}>
          <div className={styles.image}>
            <Image
              src={benefit.image}
              alt="Benefits"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <Heading type="heading-3">{benefit.title}</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {benefit.description}
            </div>

            <ul className={styles.list}>
              {benefit.items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.icon}>{Checkmark}</div>
                  <div className={cn("paragraph-medium", styles.text)}>
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/about" className={cn("button", styles.button)}>
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
