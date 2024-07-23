import cn from "classnames";
import styles from "./hero.module.css";

type HeroProps = {
  size: "hero-lg" | "hero-sm";
  className?: string;
  children: React.ReactNode;
};

export default function Hero({ size, className, children }: HeroProps) {
  return <h1 className={cn(size, styles.title, className)}>{children}</h1>;
}
