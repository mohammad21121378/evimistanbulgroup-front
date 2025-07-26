"use client";

import { useMemo, useRef, useState } from "react";

import ArticleHeader from "./components/Header";
import ArticleContent from "./components/Content";
import ArticleSidebar from "./components/Sidebar";

import { useReadingTime } from "./hooks/useReadingTime";
import { useScrollbarTracker } from "./hooks/useScrollbarTracker";

import { insight as fakeArticleData } from "./constants/insight";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Layout from "@/components/Layout";
import RealatedInsights from "./components/RealatedInsights";
import ArticleRightSidebar from "./components/RightSidebar";
import {Article} from "../../../types/Article";

export default function InsightDetails({articleData}: Article) {

  const article = articleData;

  const [showResourceBox, setShowResourceBox] = useState(false);
  const resourceRef = useRef(null);

  const textContent = useMemo(() => {
    return article.content.replace(/<[^>]*>/g, "");
  }, [article.content]);

  const readingTime = useReadingTime(textContent);

  useScrollbarTracker();

  const breadCrumb = [
    { label: "Home", link: "/" },
    { label: "Our insights", link: "/our-insights" },
    { label: article.CatName, link: `/our-insights/${article.CatSlug}` },
    { label: article.title, link: "#" },
  ];

  return (
    <Layout>

      <div className="container pt-36">

        <Breadcrumb items={breadCrumb} />

        <div id="scrollbar">
          <div id="scrollbar-inner"></div>
        </div>

        <div className="relative">

          <ArticleHeader
            article={article}

          />

          <hr className="text-slate-700 my-8" />

          <div className="grid md:grid-cols-12 grid-cols-1 gap-5 overflow-visible h-full relative">

            <ArticleSidebar
              article={article}
            />

            <ArticleContent
              article={article}
              showResourceBox={showResourceBox}
              setShowResourceBox={setShowResourceBox}
              resourceRef={resourceRef}
            />

            <ArticleRightSidebar />

          </div>
        </div>
      </div>

        <RealatedInsights />

    </Layout>
  );
}
