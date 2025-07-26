import InsightDetails from "@/screens/our-insights/insight-details";
import {createGenerateArticleMetadata} from "@/hooks/createGenerateArticleMetadata"
import {fetchArticle} from "@/helpers/api/article"

interface Props {
  params: {
    article: string;
    locale: string;
  };
}

export const generateMetadata = createGenerateArticleMetadata();


export default async function Page({ params }: Props) {
  const { locale,article } = params;
  const { data: articleData } = await fetchArticle(article, locale);

  return <InsightDetails articleData={articleData} />;
}
