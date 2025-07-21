'use client'

import Layout from "@/components/Layout";
import React from "react";
import Hero from "../hero";
import { useChangeTypeListings } from "../hooks/useChangeTypeListings";
import MapPage from "../map";
import classNames from "classnames";
import { useFilter } from "../hooks/useFilter";

export default function Content({ listings }: { listings: any[] }) {

    const {
        type,
        onChange
    } = useChangeTypeListings();

    const filtersState = useFilter({ onFilterByChange: type === 'map',listings });

    return (<>
        <div className={classNames(
            { 'hidden': type !== 'list' },
            { 'fade-in-animate': type === 'list' },
        )}>
            <Hero type={type} onChange={onChange} {...filtersState} />
        </div>

        <div className={classNames(
            { 'hidden': type === 'list' },
            { 'fade-in-animate': type !== 'list' },
        )}>
            <MapPage type={type} onChange={onChange} {...filtersState}  />
        </div>
    </>
    );
}
