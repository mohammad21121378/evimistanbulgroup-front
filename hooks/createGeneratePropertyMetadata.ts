import { PageMeta } from "@/types/Seo";
import {fetchProperty} from "@/helpers/api/property/property"
import { buildMetadataFromPage } from "@/lib/metadata";


type GenerateMetadataProps = {
    params: { locale: string,peroperty:string };
};

export function createGeneratePropertyMetadata() {
    return async function generateMetadata({ params }: GenerateMetadataProps) {
        const { locale,peroperty } = params;
        const { data: property } = await fetchProperty(peroperty, locale);

        const meta: PageMeta = {
            meta_title: property?.meta_title || "",
            meta_description: property?.meta_description || "",
            meta_follow: property?.meta_follow || "follow",
            meta_index: property?.meta_index || "index",
            url: property?.full_url ,
            updated_at: property?.updated_at || new Date().toISOString(),
            image:
                property?.images[0] ||
                "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
            language: property?.language,
            type: "place",
        };

        return buildMetadataFromPage(meta);
    };
}
