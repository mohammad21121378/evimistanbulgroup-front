"use client";

import React,{useEffect,useState} from "react";
import cn from "classnames";
import styles from "./guides-and-Insights-view.module.css";
import { Heading } from "@/components/typography";
import Link from "next/link";
import GuidesAndInsightsIisting from "@/components/guides-and-Insights-listing";
import { useInsights } from "@/constants/guides-and-Insights.constants";
import {useLocale, useTranslations} from "next-intl";
import { ArrowRight } from "@/constants/icons";
import Button from "../ui/Button";
import { fetchRecentArticles } from "@/helpers/api/recent-articles";
import {Article} from "../../types/Article";

type Props = {
  title?: string;
  description?: string;
  button?: {
    text?: string;
    href?: string;
  };
}

type ArticleResponse = {
  articles: Article[];
};

export default function GuidesAndInsightsView({
  title,
  description,
  button,
}: Props) {
  const t = useTranslations("GuidesAndInsights");
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
      <div className="container">
        <div className={styles.content}>
          
          <div className={styles.title_container}>
          <h2 className="heading-3">{title}</h2>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {description}
            </div>
          </div>

          <Button href={button?.href ? button?.href : '#'} flex size="auto">
            {button?.text} {ArrowRight}
          </Button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {articles.length > 0 && articles?.map((item, index) => (
            <GuidesAndInsightsIisting key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
