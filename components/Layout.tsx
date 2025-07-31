"use client";

import '@/styles/globals.css'

import React from "react";
import Curtain from "./curtain";
import Footer from "./footer";
import Header from "./header";
import FreeConsultation from '@/screens/free-consultation';
import ChatBot from '@/screens/chat-bot';

type LayoutProps = {
  children: React.ReactNode;
  hideFooter?: boolean
};

export default function Layout({ children,hideFooter }: LayoutProps) {
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
      {
        !hideFooter &&
      <Footer />
      }
      <FreeConsultation />
      <ChatBot />
    </>
  );
}
