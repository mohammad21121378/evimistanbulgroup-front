import { PageMeta } from "@/types/Seo";
import { fetchPageContent } from "@/helpers/api/page-detail";
import { buildMetadataFromPage } from "@/lib/metadata";
import { decodeSlugToFilters } from "@/utils/seoFilters";
import fetchProperties from "@/helpers/api/property/properties";

type SearchParams = {
    page?: string;
};

type GenerateMetadataProps = {
    params: { locale: string; filtersParams: string[] };
    searchParams: SearchParams;
};

export function createGeneratePropertyListMetadata() {
    return async function generateMetadata({ params, searchParams }: GenerateMetadataProps) {
        const { locale, filtersParams } = params;
        const page = parseInt(searchParams.page || "1", 10);
        const filters = decodeSlugToFilters(filtersParams);

        const listings = await fetchProperties(1, page, filters, locale);

        const filtersPath = filtersParams.join("/");
        const pageParam = page > 1 ? `?page=${page}` : "";
        const url = `https://evimistanbulgroup.com/${locale}/properties-for-sale-in-turkey/${filtersPath}${pageParam}`;

        const meta: PageMeta = {
            meta_title: listings.meta.meta_title,
            meta_description: listings.meta.meta_title || "",
            meta_follow: "follow",
            meta_index: "index",
            url,
            updated_at: new Date().toISOString(),
            image: "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
            language: locale,
            type: "website",
        };

        return buildMetadataFromPage(meta);
    };
}
