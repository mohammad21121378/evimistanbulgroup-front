import InsightDetails from "@/screens/our-insights/insight-details";
import {createGenerateArticleMetadata} from "@/hooks/createGenerateArticleMetadata"
import {fetchArticle} from "@/helpers/api/article"
import {Article} from "../../../../../types/Article";
import {notFound} from "next/navigation";
import SchemaJsonLd from "@/components/schema-json-ld";

interface Props {
  params: {
    article: string;
    locale: string;
  };
}

export const generateMetadata = createGenerateArticleMetadata();

interface ArticleResponse {
  article:Article;
  related_articles:Article[];
}
export default async function Page({ params }: Props) {
  const { locale,article } = params;
  const articleData = await fetchArticle(article, locale) as ArticleResponse;
  if(!articleData.article)  return notFound()

  const { article : articleRaw } = articleData;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleRaw.url
    },
    "headline": articleRaw.title,
    "description": articleRaw.meta_description ?? articleRaw.content,
    "image": articleRaw.media?.url,
    "author": {
        "@type": "Person",
        "name": articleRaw.author?.name + " " + articleRaw.author?.last_name,
        "url": articleRaw.author?.url
    },
    "publisher": {
        "@type": "Organization",
        "name": "Evimistanbul group team",
        "logo": {
            "@type": "ImageObject",
            "url": "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75"
        }
    },
    "datePublished": articleRaw.created_at,
    "dateModified": articleRaw.created_at
};

  return (
    <>
    <SchemaJsonLd data={schema} />
    <InsightDetails articleData={articleData} />
    </>
  );
}
