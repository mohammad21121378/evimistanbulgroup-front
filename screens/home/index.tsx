import Layout from "@/components/Layout";
import Header from "./header";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Showcase from "./showcase";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <LatestListings />
      <Benefits />
      <Showcase />
    </Layout>
  );
}
