import Layout from "@/components/Layout";
import Header from "./header";
import LatestListings from "./latest-listings";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <LatestListings />
    </Layout>
  );
}
