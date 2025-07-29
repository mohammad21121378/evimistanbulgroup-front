import Layout from "@/components/Layout";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Categories from "./categories";
import Services from "./services";
import Partners from "./partners";
import Testimonials from "./testimonials";
import Newsletter from "../universal/newsletter";
import Hero from "./hero";
import Offices from "../universal/offices";
import HighlightsAndFeatures from "./highlights-and-features";
import GuidesAndInsights from "./guides-and-Insights";
import { TestimonialObject } from "./testimonials/testimonials";

export default function HomePage({testimonials}: {testimonials: TestimonialObject}) {
  return (
    <>
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
        <Testimonials testimonials={testimonials} />
        <Newsletter />
      </Layout>
    </>
  );
}
