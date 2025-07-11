"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Logo from "../logo";
import Burger from "../burger";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Properties from "../Menu/Items/Properties";
import OurServices from "../Menu/Items/OurServices";
import OurInsights from "../Menu/Items/OurInsights";
import AboutUs from "../Menu/Items/AboutUs";
import TemplateItemWithItems from "../Menu/TemplateItemWithItems";
import ContactUs from "../Menu/Items/ContactUs";

const blackHeaderPages = [
  "/en/listings",
];

export default function Header() {
  const t = useTranslations("Header");

  const nav_links = [
    { title: t("home"), href: "/" },
  ];

  const [visibleNav, setVisibleNav] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 25,
        mass: 2,
        delay: 0.2,
      },
    },
  };

  const isBlackHeader = blackHeaderPages.includes(pathname);

  return (
    <header
      className={cn(styles.header, {
        [styles.sticky]: sticky,
        [styles.border_header]: isBlackHeader,
      })}
    >
      <div className={cn("container", styles.container)}>
        <Logo
          className={cn(styles.logo, {
            [styles.black_logo]: (isBlackHeader && !(mobile && visibleNav)) || sticky,
            [styles.sticky_logo]: sticky,
          })}
        />

        <motion.nav
          className={cn(styles.nav, {
            [styles.visible]: visibleNav,
          })}
          initial={mobile ? "hidden" : false}
          animate={mobile && visibleNav ? "visible" : "hidden"}
          variants={mobile ? navVariants : {}}
        >
          <div className={cn(styles.nav_links, 'text-white')}>
            {nav_links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn("label-small", styles.nav_link, {
                  [styles.active]: pathname === link.href,
                  [styles.black_link]: isBlackHeader && !(mobile && visibleNav),
                  [styles.sticky_link]: sticky,
                })}
              >
                {link.title}
              </Link>
            ))}
            <Properties />
            <OurServices />
            <OurInsights />
            <AboutUs/>
          </div>
        </motion.nav>

        <div className={styles.button_wrapper}>

          <ContactUs title={<Link
            href="/contact"
            className={cn("button-stroke-small", styles.button, {
              [styles.black_button]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_button]: sticky,
            })}
          >
            {t("contactUs")}
          </Link>} />

          <Burger
            className={styles.burger}
            burgerClassName={cn(styles.burger, {
              [styles.black_burger]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_burger]: sticky,
            })}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </header>
  );
}
