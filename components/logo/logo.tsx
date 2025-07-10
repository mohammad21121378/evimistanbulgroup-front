import Link from "next/link";
import styles from "./logo.module.css";
import cn from "classnames";
import { useTranslations } from "next-intl";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const t = useTranslations("Logo");

  return (
    <Link href="/" className={cn(styles.logo, className)}>
      {t("brandName")}
    </Link>
  );
}
