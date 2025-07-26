"use client";

import React from "react";
import { useTranslations } from "next-intl";
import GuidesAndInsightsView from "@/components/guides-and-Insights-view";
import {Article} from "../../../../types/Article";


interface RealatedInsightsProps {
    article:Article;
    related_articles:Article[];
}

export default function RealatedInsights({article,related_articles}:RealatedInsightsProps) {
  const t = useTranslations("GuidesAndInsights");

  return <GuidesAndInsightsView
      initArticles={related_articles}
    title={"Related Guides and Insights"}
    button={{
      href: `/our-insights/${article.CatSlug}`,
      text: "View All  Similar Guides and Insights"
    }} />
    ;
}
