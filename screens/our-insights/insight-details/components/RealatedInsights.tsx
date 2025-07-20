"use client";

import React from "react";
import { useTranslations } from "next-intl";
import GuidesAndInsightsView from "@/components/guides-and-Insights-view";

export default function RealatedInsights() {
  const t = useTranslations("GuidesAndInsights");

  return <GuidesAndInsightsView
    title={"Related Guides and Insights"}
    button={{
      href: '/properties-for-sale-in-turkey',
      text: "View All  Similar Guides and Insights"
    }} />
    ;
}
