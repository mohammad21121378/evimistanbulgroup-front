import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "@/constants/icons";

const links = [
  {
    id: 1,
    title: "Benefits",
    url: "#",
  },
  {
    id: 2,
    title: "Ofices",
    url: "#",
  },
  {
    id: 3,
    title: "Services",
    url: "#",
  },
  {
    id: 4,
    title: "Testimonials",
    url: "#",
  },
  {
    id: 5,
    title: "Newsletter",
    url: "#",
  },
  {
    id: 6,
    title: "Home",
    url: "#",
  },
  {
    id: 7,
    title: "About us",
    url: "#",
  },
  {
    id: 8,
    title: "Listings",
    url: "#",
  },
  {
    id: 9,
    title: "Agents",
    url: "#",
  },
];

export default function Footer() {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Logo />

          <div>
            <Heading type="heading-3" className={styles.title}>
              Building Dreams, One Home at a Time.
            </Heading>
            <div className={cn("subheading-small", styles.email)}>
              HEAVENHOMES@INFO.COM
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.business_info}>
            <div>
              <div className={cn("paragraph-small", styles.address)}>
                123 Main Street, Hometown, USA
              </div>
              <div className={cn("paragraph-small", styles.phone)}>
                (123) 456-7890
              </div>
            </div>

            <div className={styles.socials}>
              <a className={styles.social}>{Instagram}</a>
              <a className={styles.social}>{Facebook}</a>
              <a className={styles.social}>{Linkedin}</a>
            </div>

            <div className={cn("paragraph-small", styles.copyright)}>
              © 2024 Elektra. All rights reserved.
            </div>
          </div>

          <div className={styles.links}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={cn("label-medium", styles.link)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
