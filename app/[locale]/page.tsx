import { buildMetadataFromPage } from "@/lib/metadata";
import HomePage from "@/screens/home";
import { PageMeta } from "@/types/Seo";
import {fetchPageContent} from "@/helpers/api/page-detail"


type GenerateMetadataProps = {
  params: { locale: string };
};
export async function generateMetadata({ params }: GenerateMetadataProps) {
  const {locale} = params;
  const { data: page } = await fetchPageContent("home",locale);

  // فرض بر اینکه page دارای اطلاعات موردنیاز برای meta هست
  const meta: PageMeta = {
    meta_title: page?.meta_title ,
    meta_description: page?.meta_description ,
    meta_follow: page?.meta_follow ,
    meta_index: page?.meta_index ,
    url: page?.url, // آدرس کامل
    updated_at: page?.updated_at ,
    image: "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
    language: "en_US",
    type: "website",
  };

  return buildMetadataFromPage(meta);
}

export default function Home() {

  return <HomePage />;
}