import Layout from "@/components/Layout";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Showcase from "./showcase";
import Offices from "./offices";
import Categories from "./categories";
import Facts from "./facts";
import Team from "./team";
import Services from "./services";
import Partners from "./partners";
import Testimonials from "./testimonials";
import Newsletter from "../universal/newsletter";
import Hero from "./hero";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <LatestListings />
      <Benefits />
      <Showcase />
      <Offices />
      <Categories />
      <Facts />
      <Team />
      <Services />
      <Partners />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
}
