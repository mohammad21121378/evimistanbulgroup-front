'use client'

import Layout from "@/components/Layout";
import React from "react";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import Content from "./content";
import { ListingsType } from "@/types/Property";

export default function ListingsPage({ listings }: { listings: ListingsType }) {
  return (

    <Layout>

      <Content listings={listings} />

      

    </Layout>
  );
}
