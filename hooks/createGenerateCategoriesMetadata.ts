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
        const { data: categoryData } = await fetchCategoryDetail(category, locale);

        let metaTitle = categoryData?.meta_title || "";

        const categoryQuery = searchParams?.page;
        if (categoryQuery) {
            const categorySuffix = typeof categoryQuery === "string" ? categoryQuery : categoryQuery[0];
            const categoryNumber = parseInt(categorySuffix, 10);

            if (!isNaN(categoryNumber) && categoryNumber > 1) {
                metaTitle += ` - ${categoryNumber}`;
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
