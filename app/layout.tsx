import "@/styles/index.css";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata = {
  title: "HeavenHomes - Real Estate Website Template",
  description:
    "HeavenHomes is a real estate website template that helps you find the best property for you.",
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