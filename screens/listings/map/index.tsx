"use client";

import dynamic from "next/dynamic";
import FiltersBar from "./components/FiltersBar";
import classNames from "classnames";
import Breadcrumb from "../breadcrumb";
import ChangeTypeListings from "../change-type-listings";
import { FilterProps, TypeProp, onChangeType } from "../types";
import React from "react";

const PropertyMap = dynamic(
  () => import("./components/PropertyMap"),
  { ssr: false }
);

interface Props extends FilterProps {
  type: TypeProp;
  onChange: onChangeType
}

function MapPage({ type, onChange, ...filtersState }: Props) {

  return (
    <section className={classNames("section !pt-0 mt-36")}>
      <div className="container">
        <Breadcrumb />
        <div className="grid md:grid-cols-[1fr,2fr] grid-cols-1 gap-x-12 pt-4">
          <ChangeTypeListings type={type} onChange={onChange} />
        </div>
        <div className="relative w-full h-[35rem]">
          <FiltersBar {...filtersState} />
          <PropertyMap loadingData={filtersState.loading} properties={filtersState.properties} />
        </div>
      </div>
    </section>
  );
}


export default React.memo(MapPage);