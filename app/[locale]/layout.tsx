import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import cn from "classnames";
import "@/styles/index.css";
import { Providers } from "../providers";
import { routing } from '@/i18n/routing';
import { ReactNode } from "react";
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import SchemaJsonLd from "@/components/schema-json-ld";
import { schema } from "@/constants/schama-for-head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});
const authorSemibold = localFont({
  src: [
    {
      path: "../../public/fonts/Author-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-author-semibold",
});

export const metadata = {
  title: "EvimIstanbul",
  description:
    "EvimIstanbul Group®",
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: 'ar' | 'fa' | 'en' };
};

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  
    
    if (!routing.locales.includes(locale)) {
        notFound();
    }
    
    setRequestLocale(locale);
    
    const messages = await getMessages();

  const isRTL = locale === "fa" || locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <SchemaJsonLd data={schema} />
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          authorSemibold.variable,
          isRTL && "tw-font-vazir"
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
