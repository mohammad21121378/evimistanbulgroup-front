import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "@/constants/icons";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const links = [
    { id: 1, title: t("links.benefits"), url: "#" },
    { id: 6, title: t("links.home"), url: "#" },
    { id: 2, title: t("links.offices"), url: "#" },
    { id: 7, title: t("links.aboutUs"), url: "#" },
    { id: 3, title: t("links.services"), url: "#" },
    { id: 8, title: t("links.listings"), url: "#" },
    { id: 4, title: t("links.testimonials"), url: "#" },
    { id: 9, title: t("links.agents"), url: "#" },
    { id: 5, title: t("links.newsletter"), url: "#" },
  ];

  const socials = [
    { id: 1, icon: Instagram, title: t("socials.instagram"), url: "#" },
    { id: 2, icon: Facebook, title: t("socials.facebook"), url: "#" },
    { id: 3, icon: Linkedin, title: t("socials.linkedin"), url: "#" },
    { id: 4, icon: Youtube, title: t("socials.youtube"), url: "#" },
  ];

  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Logo className="!text-white" />

          <div>
            <Heading type="heading-3" className={styles.title}>
              {t("slogan")}
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
                {t("address")}
              </div>
              <div className={cn("paragraph-small", styles.phone)}>
                {t("phone")}
              </div>
            </div>

            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className={cn("paragraph-small", styles.copyright)}>
              {t("copyright")}
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
