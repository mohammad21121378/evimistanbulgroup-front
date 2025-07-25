import { buildMetadataFromPage } from "@/lib/metadata";
import HomePage from "@/screens/home";
import { PageMeta } from "@/types/Seo";
import {fetchPageContent} from "@/helpers/api/page-detail"
import {createGenerateMetadata} from "@/hooks/createGenerateMetadata"

export const generateMetadata = createGenerateMetadata("home");

export default function Home() {

  return <HomePage />;
}