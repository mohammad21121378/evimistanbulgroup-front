import React from "react";
import styles from "./text-marquee.module.css";
import Marquee from "react-fast-marquee";
import { Heading } from "../typography";

type TextMarqueeProps = {
  direction?: "left" | "right";
  gradient?: boolean;
  children: React.ReactNode;
};

export default function TextMarquee({
  direction = "left",
  gradient = true,
  children,
}: TextMarqueeProps) {
  return (
    <Marquee
      direction={direction}
      gradient={gradient}
      autoFill={true}
      speed={100}
    >
      {children}
    </Marquee>
  );
}
