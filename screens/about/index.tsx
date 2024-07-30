import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Mission from "./mission";
import Values from "./values";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Values />
    </Layout>
  );
}
