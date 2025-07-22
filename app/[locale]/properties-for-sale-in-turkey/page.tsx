import ListingsPage from "@/screens/listings";
import fetchProperties from "@/helpers/api/property/properties";
import { ListingsType } from "@/types/Property";

type SearchParams = {
  page?: string;
  type?: string;
  feature?: string;
  location?: string;
};

export default async function Listings({ searchParams }: { searchParams: SearchParams }) {
  const page = parseInt(searchParams.page || "1", 10);

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

  const listings = await fetchProperties(3, page, filters) as ListingsType;

  return <ListingsPage listings={listings} />;
}
