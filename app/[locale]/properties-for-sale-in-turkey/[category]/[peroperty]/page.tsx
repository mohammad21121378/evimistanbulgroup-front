import { Peroperty } from "@/constants/mock";
import PropertyDetailPage from "@/screens/property-detail";
import fetchProperty from "@/helpers/api/property/property";
import { notFound } from "next/navigation";


type Props = {
  params: { peroperty: string,locale: string };
};

export default async function Page({ params }: Props) {
  const { peroperty,locale } = params;
  const property = await fetchProperty(peroperty,locale);

  if (!property) {
    notFound(); // نمایش صفحه 404
  }
  return <PropertyDetailPage item={property} />;
}
