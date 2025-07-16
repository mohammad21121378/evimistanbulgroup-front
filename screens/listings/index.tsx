'use client'

import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import { useChangeTypeListings } from "./hooks/useChangeTypeListings";
import MapPage from "./map";
import classNames from "classnames";

export default function ListingsPage() {
  const {
    type,
    onChange
  } = useChangeTypeListings()
  return (
    <Layout>

      <div className={classNames(
        { 'hidden': type !== 'list' },
        { 'fade-in-animate': type === 'list' },
        )}>
        <Hero type={type} onChange={onChange} />
      </div>

      <div className={classNames(
        { 'hidden': type === 'list' },
        { 'fade-in-animate': type !== 'list' },
      )}>
        <MapPage type={type} onChange={onChange} />
      </div>

      <Benefits />
      <FindProperty />
    </Layout>
  );
}
