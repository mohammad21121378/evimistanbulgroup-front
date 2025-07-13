"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ArticleHeader from "./components/Header";
import ArticleContent from "./components/Content";
import ArticleSidebar from "./components/Sidebar";

import { useReadingTime } from "./hooks/useReadingTime";
import { useScrollbarTracker } from "./hooks/useScrollbarTracker";

import { insight as fakeArticleData } from "./constants/insight";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import Layout from "@/components/Layout";
import RealatedInsights from "./components/RealatedInsights";

export default function InsightDetails() {

  const article = fakeArticleData.article;

  const [showResourceBox, setShowResourceBox] = useState(false);
  const resourceRef = useRef(null);

  const textContent = useMemo(() => {
    return article.content.replace(/<[^>]*>/g, "");
  }, [article.content]);

  const addIdsToHeadings = () => {
    const articleContent = document.querySelector("#article_content");
    if (!articleContent) return;
    const headings = Array.from(articleContent.querySelectorAll("h2"));
    headings.forEach(heading => {
      const id = heading.innerText.trim().replace(/\s+/g, "-");
      heading.id = id;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      addIdsToHeadings();

    }, 1000)
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

          <div className="grid grid-cols-12 gap-5 overflow-auto h-full relative">


            <ArticleContent
              article={article}
              showResourceBox={showResourceBox}
              setShowResourceBox={setShowResourceBox}
              resourceRef={resourceRef}
            />

            <ArticleSidebar
              article={article}
            />

          </div>
        </div>
      </div>
      <div className="mb-14">
      <RealatedInsights />
      </div>
    </Layout>
  );
}
