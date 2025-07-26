"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Logo from "../logo";
import Burger from "../burger";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import Properties from "@/components/menu/items/Properties";
import OurServices from "@/components/menu/items/OurServices";
import OurInsights from "@/components/menu/items/OurInsights";
import AboutUs from "@/components/menu/items/AboutUs";
import ContactUs from "@/components/menu/items/ContactUs";

const blackHeaderPages = [
  '/'
];


export default function Header() {
  const t = useTranslations("Header");
  
  const locale = useLocale();
  
  const lightHeaderPages = [
    `/${locale}`,
    `/${locale}/client-stories`,
    `/${locale}/faqs`,
    `/${locale}/faqs/*`,
  ];

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
  const islightHeader = lightHeaderPages.some((path) => {
    if (path.endsWith("/*")) {
      const base = path.replace("/*", "");
      return pathname.startsWith(base);
    }
    return pathname === path;
  });
  

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
          <div className={cn(styles.nav_links, '', {
            [styles.black_link]: isBlackHeader && !(mobile && visibleNav),
            '!text-white' : islightHeader || sticky || visibleNav,
            '!text-black' : !sticky && !islightHeader,
            })}>
            {nav_links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn("label-small", styles.nav_link, {
                  [styles.active]: pathname === link.href,
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
              '!text-white' : islightHeader || sticky || visibleNav,
            '!text-black hover:!text-white' : !sticky && !islightHeader,
            })}
          >
            {t("contactUs")}
          </Link>} />

          <Burger
            className={styles.burger}
            burgerClassName={cn(styles.burger, {
              [styles.black_burger]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_burger]: sticky,
              '!text-white' : islightHeader || sticky || visibleNav,
            '!text-black' : !sticky && !islightHeader,
              
            })}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </header>
  );
}
