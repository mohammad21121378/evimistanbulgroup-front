import Layout from "@/components/Layout";
import Header from "./header";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Showcase from "./showcase";
import Offices from "./offices";
import Categories from "./categories";
import Facts from "./facts";

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <LatestListings />
      <Benefits />
      <Showcase />
      <Offices />
      <Categories />
      <Facts />
    </Layout>
  );
}
