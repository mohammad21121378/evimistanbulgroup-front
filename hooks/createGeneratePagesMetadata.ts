import { PageMeta } from "@/types/Seo";
import {fetchPageContent} from "@/helpers/api/page-detail"
import { buildMetadataFromPage } from "@/lib/metadata";


type GenerateMetadataProps = {
    params: { locale: string };
};

export function createGenerateMetadata(slug: string) {
    return async function generateMetadata({ params }: GenerateMetadataProps) {
        const { locale } = params;
        const { data: page } = await fetchPageContent(slug, locale);

        const meta: PageMeta = {
            meta_title: page?.meta_title || "",
            meta_description: page?.meta_description || "",
            meta_follow: page?.meta_follow || "follow",
            meta_index: page?.meta_index || "index",
            url: page?.url || `https://evimistanbulgroup.com/${locale}/${slug}`,
            updated_at: page?.updated_at || new Date().toISOString(),
            image:
                page?.image ||
                "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
            language: page?.language || (locale === "tr" ? "tr_TR" : "en_US"),
            type: "website",
        };

        return buildMetadataFromPage(meta);
    };
}
