import "@/styles/index.css";
import 'react-phone-input-2/lib/style.css';

import { ReactNode } from "react";
import { Providers } from "./providers";
import Toast from "@/components/ui/toast";
import FancyProgressBar from "@/components/fancy-progress-bar";
import SchemaJsonLd from "@/components/schema-json-ld";
import { schema } from "@/constants/schama-for-head";

export const metadata = {
  title: "EvimIstanbul",

  description:
    "EvimIstanbul Group®",

  favion: "/favicon.ico"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html>
      <SchemaJsonLd data={schema} />
      <body>
        <FancyProgressBar />
        <Providers>
          <Toast />
          {children}
        </Providers>
      </body>
    </html>
  );
}