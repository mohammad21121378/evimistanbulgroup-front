import "@/styles/index.css";
import 'react-phone-input-2/lib/style.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/themes/light.css';

import { ReactNode } from "react";
import { Providers } from "./providers";
import Toast from "@/components/ui/toast";
import FancyProgressBar from "@/components/fancy-progress-bar";
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
      <head>
        {schema.map((item, index) => (
          <script
            key={index}
            id={`schema-${item['@type']}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(item).replace(/</g, '\\u003c'),
            }}
          />
        ))}
      </head>
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