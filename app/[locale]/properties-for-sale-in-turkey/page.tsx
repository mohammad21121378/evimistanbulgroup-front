import ListingsPage from "@/screens/listings";
import fetchProperties from "@/helpers/api/property/properties"
export default async function Listings() {

  const listings = await fetchProperties(15,1);


  return <ListingsPage listings={listings} />;
}
