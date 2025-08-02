import { PageMeta } from "@/types/Seo";
import fetchProperty from "@/helpers/api/property/property"
import { buildMetadataFromPage } from "@/lib/metadata";
import {notFound} from "next/navigation";


type GenerateMetadataProps = {
    params: { locale: string,peroperty:string };
};

export function createGeneratePropertyMetadata() {
    return async function generateMetadata({ params }: GenerateMetadataProps) {
        const { locale,peroperty: peropertyParam} = params;

        console.log(peropertyParam);
        
        
        const propertyData = await fetchProperty(peropertyParam, locale);


        if(propertyData.property){
            const meta: PageMeta = {
                meta_title: propertyData.property?.meta_title || "",
                meta_description: propertyData.property?.meta_description || "",
                meta_follow: propertyData.property?.meta_follow || "follow",
                meta_index: propertyData.property?.meta_index || "index",
                url: propertyData.property?.full_url ,
                updated_at: propertyData.property?.updated_at || new Date().toISOString(),
                image:
                    propertyData.property?.images[0] ||
                    "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
                language: propertyData.property?.language,
                type: "website",
            };

            return buildMetadataFromPage(meta);
        }

    };
}
