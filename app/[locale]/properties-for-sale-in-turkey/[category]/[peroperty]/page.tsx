import { Peroperty } from "@/constants/mock";
import PropertyDetailPage from "@/screens/property-detail";
import fetchProperty from "@/helpers/api/property/property";
import { notFound } from "next/navigation";
import { createGeneratePropertyMetadata } from "@/hooks/createGeneratePropertyMetadata"
import Head from "next/head";
import SchemaJsonLd from "@/components/schema-json-ld";


type Props = {
  params: { peroperty: string, locale: string };
};

export const generateMetadata = createGeneratePropertyMetadata();


export default async function Page({ params }: Props) {
  const { peroperty, locale } = params;
  const property = await fetchProperty(peroperty, locale);

  if (!property) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.property.title,
    "description": property.property.description,
    "url": property.property.full_url,
    "datePosted": property.property.created_at_formated,
    "mainEntityOfPage": property.property.full_url,
    "image": property.property.galleryForSchema,
    "offers": {
      "@type": "Offer",
      "price": property.property.max_price,
      "priceCurrency": property.property.currency_symbol,
      "availability": "https://schema.org/InStock"
    },
   /* "seller": {
      "@type": "RealEstateAgent",
      "name": "Evim Istanbul Group",
      "url": "https://evimistanbulgroup.com/our-story",
      "telephone": "+90 (534) 811 11 93"
    }*/
  };

  return (
    <>
      <SchemaJsonLd data={schema} />
      <PropertyDetailPage item={property.property} related={property.related_properties} />
    </>)
}
