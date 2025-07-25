import OurServicesDetails from "@/screens/our-services-detail";
import { servicesData } from "@/screens/our-services-detail/constants";
import { PageMeta } from "@/types/Seo";
import {fetchPageContent} from "@/helpers/api/page-detail"
import { buildMetadataFromPage } from "@/lib/metadata";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

type GenerateMetadataProps = {
  params: { locale: string,slug:string | null };
};
export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { locale,slug } = params;
  const { data: page } = await fetchPageContent(slug, locale);
  if(page){
    const meta: PageMeta = {
      meta_title: page?.meta_title || "",
      meta_description: page?.meta_description || "",
      meta_follow: page?.meta_follow || "follow",
      meta_index: page?.meta_index || "index",
      url: page?.url || `https://evimistanbulgroup.com/${locale}/our-services/${slug}`,
      updated_at: page?.updated_at || new Date().toISOString(),
      image:
          page?.image ||
          "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
      language: page?.language || (locale === "tr" ? "tr_TR" : "en_US"),
      type: "website",
    };

    return buildMetadataFromPage(meta);
  }

};

export function generateStaticParams() {
  return servicesData.map(service => ({ slug: service.slug }));
}

export default function ServicePage({ params }: Props) {

  const service = servicesData.find(s => s.slug === params.slug);
  if (!service) return notFound();

  return <OurServicesDetails data={service} />;
}
