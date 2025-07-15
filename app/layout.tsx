import "@/styles/index.css";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata = {
  title: "EvimIstanbul",
  description:
    "EvimIstanbul Group®",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}