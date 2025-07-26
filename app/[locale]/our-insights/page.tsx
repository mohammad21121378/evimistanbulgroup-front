import OurInsights from "@/screens/our-insights/pages";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"
import { fetchPageContent } from "@/helpers/api/page-detail";
import { fetchRecentArticles } from "@/helpers/api/recent-articles";


export const generateMetadata = createGenerateMetadata("our-insights");
type SearchParams = {
    page?: number;
};

type Props = {
    params: { locale: string };
    searchParams: SearchParams;
};

export default async function Home({ params, searchParams }: Props) {
    const { page } = searchParams;
    const { locale } = params;
    const { data: pageData } = await fetchPageContent("our-insights", locale);
    const articles = await fetchRecentArticles(12,page || 1, locale);

    return <OurInsights articles={articles} page={pageData}/>
}
