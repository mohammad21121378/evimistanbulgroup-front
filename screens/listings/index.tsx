'use client'

import Layout from "@/components/Layout";
import React from "react";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import Content from "./content";
import { useEffect } from 'react';
import { ListingsType } from "@/types/Property";

export default function ListingsPage({ listings }: { listings: ListingsType }) {
    useEffect(() => {
        console.log('Listings on client:', listings); // این در مرورگر لاگ می‌شه
    }, [listings]);
  return (

    <Layout>

      <Content listings={listings} />

      <Benefits />
      <FindProperty />

    </Layout>
  );
}
