import { PageMeta } from "@/types/Seo";
import {fetchArticle} from "@/helpers/api/article"
import { buildMetadataFromPage } from "@/lib/metadata";


type GenerateMetadataProps = {
    params: { locale: string,article:string };
};

export function createGenerateArticleMetadata() {
    return async function generateMetadata({ params }: GenerateMetadataProps) {
        const { locale,article } = params;
        const articleData = await fetchArticle(article, locale);

        const meta: PageMeta = {
            meta_title: articleData?.meta_title || "",
            meta_description: articleData?.meta_description || "",
            meta_follow: articleData?.meta_follow || "follow",
            meta_index: articleData?.meta_index || "index",
            url: articleData?.url ,
            updated_at: articleData?.updated_at || new Date().toISOString(),
            image:
                articleData?.media?.url ||
                "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
            language: articleData?.language,
            type: "website",
        };

        return buildMetadataFromPage(meta);
    };
}
