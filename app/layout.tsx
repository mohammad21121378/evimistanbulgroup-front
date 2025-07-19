import "@/styles/index.css";
import 'react-phone-input-2/lib/style.css';

import { ReactNode } from "react";
import { Providers } from "./providers";
import Toast from "@/components/ui/toast";

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
      <body>
        <Providers>
          <Toast />
          {children}
        </Providers>
      </body>
    </html>
  );
}