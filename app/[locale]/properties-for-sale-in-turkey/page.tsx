import ListingsPage from "@/screens/listings";
import fetchProperties from "@/helpers/api/property/properties";

export default async function Listings({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || "1", 10);
  const listings = await fetchProperties(3, page);

  return <ListingsPage listings={listings} />;
}
