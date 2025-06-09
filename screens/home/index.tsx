import Layout from "@/components/Layout";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Showcase from "./showcase";
import Categories from "./categories";
import Team from "./team";
import Services from "./services";
import Partners from "./partners";
import Testimonials from "./testimonials";
import Newsletter from "../universal/newsletter";
import Hero from "./hero";
import Offices from "../universal/offices";
import Facts from "../universal/facts";
import HighlightsAndFeatures from "./highlights-and-features";
import GuidesAndInsights from "./guides-and-Insights";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Offices />
      <LatestListings />
      <Categories />
      <HighlightsAndFeatures />
      <Services />
      <GuidesAndInsights />
      <Partners />
      <Benefits />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
}
