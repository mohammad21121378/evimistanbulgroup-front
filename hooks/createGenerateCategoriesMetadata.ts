import { PageMeta } from "@/types/Seo";
import { fetchCategoryDetail } from "@/helpers/api/category-detail";
import { buildMetadataFromPage } from "@/lib/metadata";

type GenerateMetadataProps = {
    params: { locale: string; category: string | null };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export function createGenerateCategoriesMetadata() {
    return async function generateMetadata({ params, searchParams }: GenerateMetadataProps) {
        const { locale, category } = params;
        const { data: categoryData } = await fetchCategoryDetail(category,1,1, locale);

        let metaTitle = categoryData?.meta_title || "";

        const categoryQuery = searchParams?.page;
        if (categoryQuery) {
            const pageSuffix = typeof categoryQuery === "string" ? categoryQuery.trim() : categoryQuery[0].trim();
            const pageNumber = parseInt(pageSuffix, 10);


            if (!isNaN(pageNumber) && pageNumber > 1) {
                metaTitle += ` - ${pageNumber}`;
            }
        }

        const meta: PageMeta = {
            meta_title: metaTitle,
            meta_description: categoryData?.meta_description || "",
            meta_follow: categoryData?.meta_follow || "follow",
            meta_index: categoryData?.meta_index || "index",
            url: `https://evimistanbulgroup.com/${locale}/our-insights/${categoryData.slug}`,
            updated_at: categoryData?.updated_at || new Date().toISOString(),
            image:
                categoryData?.image ||
                "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
            language: categoryData?.language,
            type: "article",
        };

        return buildMetadataFromPage(meta);
    };
}
