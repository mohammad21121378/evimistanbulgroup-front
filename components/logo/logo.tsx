import Link from "next/link";
import styles from "./logo.module.css";
import cn from "classnames";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn(styles.logo, className)}>
      HeavenHomes™
    </Link>
  );
}
