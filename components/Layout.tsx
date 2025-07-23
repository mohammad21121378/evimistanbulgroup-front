"use client";

import '@/styles/globals.css'

import React from "react";
import Curtain from "./curtain";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [showCurtain, setShowCurtain] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showCurtain && <Curtain />}
      <Header />
      {children}
      <Footer />
    </>
  );
}
