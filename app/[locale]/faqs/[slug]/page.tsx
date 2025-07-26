import FaqDetails from "@/screens/faq-details";
import { faqsData } from "@/screens/faq-details/constants";
import { createStaticMetadataGenerator } from "@/hooks/createStaticMetadataGenerator"
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"

export const generateMetadata = createStaticMetadataGenerator("faqs");


export function generateStaticParams() {
  return faqsData.map(page => ({ slug: page.slug }));
}

export default function ServicePage({ params }: Props) {

  const faq = faqsData.find(s => s.slug === params.slug);
  if (!faq) return notFound();

  return <FaqDetails data={faq} />;
}
