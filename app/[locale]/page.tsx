import { buildMetadataFromPage } from "@/lib/metadata";
import HomePage from "@/screens/home";
import { PageMeta } from "@/types/Seo";


export async function generateMetadata() {
  const page: PageMeta = {
    meta_title: "Home | Evim Istanbul group",
    meta_description: "Home | Evim Istanbul group",
    meta_follow: "follow",
    meta_index: "index",
    url: "https://www.evimistanbul.com/",
    updated_at: "2025-07-25T19:00:00Z",
    image: "https://www.evimistanbul.com/images/evim-istanbul-logo.jpg",
    language: "en_US",
    type: "website",
  };

  return buildMetadataFromPage(page);
}

export default function Home() {
  
  return <HomePage />;
}