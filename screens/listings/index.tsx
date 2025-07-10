import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Benefits from "./benefits";
import FindProperty from "./find-property";

export default function ListingsPage() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <FindProperty />
    </Layout>
  );
}
