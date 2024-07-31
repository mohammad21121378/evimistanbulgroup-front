import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Mission from "./mission";
import Values from "./values";
import Leadership from "./leadership";
import Offices from "../universal/offices";
import Facts from "../universal/facts";
import Gallery from "./gallery";
import Newsletter from "../universal/newsletter";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Values />
      <Leadership />
      <Offices />
      <Facts />
      <Gallery />
      <Newsletter />
    </Layout>
  );
}
