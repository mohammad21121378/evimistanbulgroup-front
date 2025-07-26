import React, {useEffect, useState} from "react";
import styles from "./insights.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { ArrowRight } from "@/constants/icons";
import Link from "next/link";
import { useInsights } from "@/constants/guides-and-Insights.constants";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";
import {Article} from "../../../types/Article";
import {useLocale} from "next-intl";
import { fetchRecentArticles } from "@/helpers/api/recent-articles";


type ArticleResponse = {
  articles: Article[];
};
export default function Insights() {
  const [articles, setArticles] = useState<Article[]>([]);
  const locale = useLocale();


  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await fetchRecentArticles(3, 1, locale) as ArticleResponse;
        setArticles(result.articles);
      } catch (error) {
        console.error("", error);
      }
    };

    getArticles();
  }, [locale]);
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h2>
            <Heading type="heading-3">Our Guides & Insights</Heading>
          </h2>

          <Link href="/our-insights" className={cn("button button-primary")}>
            View All Insights {ArrowRight}
          </Link>
          
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {articles?.map((item, index) => (
            <GuidesAndInsightsIisting key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
