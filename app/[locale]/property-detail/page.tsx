import { Peroperty } from "@/constants/mock";
import PropertyDetailPage from "@/screens/property-detail";

export default function PropertyDetail({ searchParams }: any) {

  const item = Peroperty;

  return <PropertyDetailPage item={item} />;
}
