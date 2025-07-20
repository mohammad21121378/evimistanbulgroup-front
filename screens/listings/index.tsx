'use client'

import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import Content from "./content";

export default function ListingsPage() {
  
  return (
    <Layout>

      <Content />

      <Benefits />
      <FindProperty />

    </Layout>
  );
}
