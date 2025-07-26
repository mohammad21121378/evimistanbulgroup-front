import InsightDetails from "@/screens/our-insights/insight-details";
import {createGenerateArticleMetadata} from "@/hooks/createGenerateArticleMetadata"
import {fetchArticle} from "@/helpers/api/article"
import {Article} from "../../../../../types/Article";

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

  return <InsightDetails articleData={articleData} />;
}
