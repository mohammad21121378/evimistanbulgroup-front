import FaqDetails from "@/screens/faq-details";
import { faqsData } from "@/screens/faq-details/constants";
import { createStaticMetadataGenerator } from "@/hooks/createStaticMetadataGenerator"
import { notFound } from "next/navigation";
import SchemaJsonLd from "@/components/schema-json-ld";

type Props = {
  params: { slug: string };
};

export const generateMetadata = createStaticMetadataGenerator("faqs");


export function generateStaticParams() {
  return faqsData.map(page => ({ slug: page.slug }));
}

export default function ServicePage({ params }: Props) {

  const faq = faqsData.find(s => s.slug === params.slug);
  if (!faq) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.list.map((item) => {
      const match = item.match(/\*\*(.+?)\*\*\s*[-–—]\s*(.+)/s);
      if (!match) return null;
  
      const [, question, answer] = match;
      return {
        "@type": "Question",
        "name": question.trim(),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer.trim(),
        },
      };
    }).filter(Boolean)
  };

  return (<>
  <SchemaJsonLd data={faqSchema} />
  <FaqDetails data={faq} />
  </>
  );
}
