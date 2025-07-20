"use client";

import React from "react";
import { useTranslations } from "next-intl";
import GuidesAndInsightsView from "@/components/guides-and-Insights-view";

export default function GuidesAndInsights() {
  const t = useTranslations("GuidesAndInsights");

  return <GuidesAndInsightsView
    title={t("title")}
    description={t("description")}
    button={{
      href: '/properties-for-sale-in-turkey',
      text: t("button")
    }} />
    ;
}
