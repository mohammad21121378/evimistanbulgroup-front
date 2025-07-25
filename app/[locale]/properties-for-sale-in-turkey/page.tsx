import ListingsPage from "@/screens/listings";
import fetchProperties from "@/helpers/api/property/properties";
import { ListingsType } from "@/types/Property";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"

type SearchParams = {
  page?: string;
  type?: string;
  feature?: string;
  location?: string;
};

type Props = {
  params: { locale: string };
  searchParams: SearchParams;
};



export const generateMetadata = createGenerateMetadata("properties-for-sale-in-turkey");


export default async function Listings({ params, searchParams }: Props) {
  const page = parseInt(searchParams.page || "1", 10);
  const { locale } = params;
  const filters: Record<string, string[]> = {};

  if (searchParams.type && searchParams.type!=='all') {
    filters.propertyTypesSelected = [searchParams.type];
  }

  if (searchParams.feature && searchParams.feature!=='all') {
    filters.featureSelected = [searchParams.feature];
  }

  if (searchParams.location && searchParams.location!=='all') {
    filters.locationsSelected = [searchParams.location];
  }

  const listings = await fetchProperties(12, page, filters,locale) as ListingsType;

  return <ListingsPage listings={listings} />;
}
