import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Mission from "./mission";
import Values from "./values";
import Leadership from "./leadership";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Values />
      <Leadership />
    </Layout>
  );
}
