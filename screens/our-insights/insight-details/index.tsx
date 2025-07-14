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

export default function InsightDetails() {

  const article = fakeArticleData.article;

  const [showResourceBox, setShowResourceBox] = useState(false);
  const resourceRef = useRef(null);

  const textContent = useMemo(() => {
    return article.content.replace(/<[^>]*>/g, "");
  }, [article.content]);

  const readingTime = useReadingTime(textContent);

  useScrollbarTracker();

  const breadCrumb = [
    { label: "Basin Merkezi", link: "/basin-merkezi" },
    { label: article.subCatName.title, link: article.subCatName.url },
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
            readingTime={readingTime}
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

      <div className="mb-14">
        <RealatedInsights />
      </div>

    </Layout>
  );
}
