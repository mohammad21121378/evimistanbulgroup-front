'use client'

import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {

  const t = useTranslations("PrivacyPolicy")

  return (
    <Layout>

      <Hero />



      <Content t={t} />


    </Layout>
  );
}
