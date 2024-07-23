"use client";

import React from "react";
import cn from "classnames";
import styles from "./navigation.module.css";
import Logo from "../logo";
import Burger from "../burger";
import { motion } from "framer-motion";

const nav_links = [
  { title: "Home", href: "#" },
  { title: "About us", href: "#about-us" },
  { title: "Listings", href: "#listings" },
  { title: "Agents", href: "#agents" },
];

export default function Navigation() {
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  const handleScrollSection = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = mobile ? 0 : 100;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });

      if (mobile) {
        setVisibleNav(false);
      }
    }
  };

  return (
    <header
      className={cn(styles.header, {
        [styles.sticky]: sticky,
      })}
    >
      <div className={cn("container", styles.container)}>
        <Logo />

        <motion.nav
          className={cn(styles.nav, {
            [styles.visible]: setVisibleNav,
          })}
          initial={mobile ? "hidden" : false}
          animate={mobile && visibleNav ? "visible" : "hidden"}
          variants={mobile ? navVariants : {}}
        >
          <div className={styles.nav_links}>
            {nav_links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn("label-small", styles.nav_link, {
                  [styles.active]: visibleNav,
                })}
                onClick={(e) => handleScrollSection(e, link.href)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.nav>

        <div className={styles.button_wrapper}>
          <button
            className={cn("button-stroke-small", styles.button)}
            onClick={(e) => handleScrollSection(e, "#contact")}
          >
            Get In Touch
          </button>

          <Burger
            className={styles.burger}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </header>
  );
}
