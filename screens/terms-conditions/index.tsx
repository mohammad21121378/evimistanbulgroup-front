'use client'

import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { useTranslations } from "next-intl";

export default function TermsConditions() {

  const t = useTranslations("TermsConditions")

  return (
    <Layout>

      <Hero />



      <Content t={t} />


    </Layout>
  );
}
