import OurServicesDetails from "@/screens/our-services-detail";
import { servicesData } from "@/screens/our-services-detail/constants";

import { notFound } from "next/navigation";
import {createStaticMetadataGenerator} from "@/hooks/createStaticMetadataGenerator"

type Props = {
  params: { slug: string };
};



export const generateMetadata = createStaticMetadataGenerator("our-services");


export function generateStaticParams() {
  return servicesData.map(service => ({ slug: service.slug }));
}

export default function ServicePage({ params }: Props) {

  const service = servicesData.find(s => s.slug === params.slug);
  if (!service) return notFound();

  return <OurServicesDetails data={service} />;
}
