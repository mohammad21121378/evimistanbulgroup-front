'use client'

import Layout from "@/components/Layout";
import React from "react";
import Benefits from "./benefits";
import FindProperty from "./find-property";
import { ListingsType } from "@/types/Property";
import classNames from "classnames";
import Hero from "./hero";
import MapPage from "./map";
import { useFilter } from "./hooks/useFilter";
import { useChangeTypeListings } from "./hooks/useChangeTypeListings";
import { SeoFilters } from "@/utils/seoFilters";


type Props = { 
  listings: ListingsType;
  initialSeoFilters?: SeoFilters;

}

export default function ListingsPage({ listings, initialSeoFilters }: Props) {

  const {
    type,
    onChange
  } = useChangeTypeListings();

  const filtersState = useFilter({ onFilterByChange: type === 'map', listings, typeShowPage: type, initialSeoFilters });

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
