'use client'

import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import Content from "./content";
import { useEffect } from 'react';

export default function ListingsPage({ listings }: { listings: any[] }) {
    useEffect(() => {
        console.log('Listings on client:', listings); // این در مرورگر لاگ می‌شه
    }, [listings]);
  return (

    <Layout>

      <Content />

      <Benefits />
      <FindProperty />

    </Layout>
  );
}
