'use client'

import Layout from "@/components/Layout";
import React from "react";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import Content from "./content";
import { ListingsType } from "@/types/Property";
import classNames from "classnames";
import Hero from "./hero";
import MapPage from "./map";
import { useFilter } from "./hooks/useFilter";
import { useChangeTypeListings } from "./hooks/useChangeTypeListings";

export default function ListingsPage({ listings }: { listings: ListingsType }) {

  const {
    type,
    onChange
  } = useChangeTypeListings();

  const filtersState = useFilter({ onFilterByChange: type === 'map', listings, typeShowPage: type });

  return (

    <Layout hideFooter={type === 'map'}>

      <div className={classNames(
        { 'hidden': type !== 'list' },
        { 'fade-in-animate': type === 'list' },
      )}>
        <Hero type={type} onChange={onChange} {...filtersState} />
        <Benefits />
        <FindProperty />
      </div>

      <div className={classNames(
        { 'hidden': type === 'list' },
        { 'fade-in-animate': type !== 'list' },
      )}>
        <MapPage type={type} onChange={onChange} {...filtersState} />
      </div>

      {/* <Content listings={listings} /> */}



    </Layout>
  );
}
