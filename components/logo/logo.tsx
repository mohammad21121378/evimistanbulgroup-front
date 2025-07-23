import Link from "next/link";
import styles from "./logo.module.css";
import cn from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const t = useTranslations("Logo");

  return (
    <Link href="/" className={cn(styles.logo, className, 'relative h-10 w-[17.15rem]')}>
      <Image
        src="/images/EvimIstanbul Group Official LOGO.png"
        alt="EvimIstanbul Group Official"
        objectFit="contain"
        fill
      />
    </Link>
  );
}
