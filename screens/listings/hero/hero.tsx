"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Dropdown, TextField } from "@/components/elements";
import { Building, Ruler, Location, Bath } from "@/constants/icons";
import PropertyListing from "@/components/property-listing";
import { Listings } from "@/constants/mock";

const propertyTypes = [
  {
    id: 1,
    name: "All Types",
  },
  {
    id: 2,
    name: "Houses",
  },
  {
    id: 3,
    name: "Townhouses",
  },
  {
    id: 4,
    name: "Condos",
  },
  {
    id: 5,
    name: "Villas",
  },
  {
    id: 6,
    name: "Commercial",
  },
];

const bedroomsOptions = [
  {
    value: 1,
    label: "Bedrooms",
  },
  {
    value: 2,
    label: "1+",
  },
  {
    value: 3,
    label: "2+",
  },
  {
    value: 4,
    label: "3+",
  },
  {
    value: 5,
    label: "4+",
  },
  {
    value: 6,
    label: "5+",
  },
];

const bathroomOptions = [
  {
    value: 1,
    label: "Bathrooms",
  },
  {
    value: 2,
    label: "1+",
  },
  {
    value: 3,
    label: "2+",
  },
  {
    value: 4,
    label: "3+",
  },
  {
    value: 5,
    label: "4+",
  },
];

export default function Hero() {
  const [keyword, setKeyword] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [propertyType, setPropertyType] = React.useState<string | null>(null);
  const [bedrooms, setBedrooms] = React.useState<string | null>(null);
  const [bathrooms, setBathrooms] = React.useState<string | null>(null);
  const [applyFilters, setApplyFilters] = React.useState<boolean>(false);

  const propertyTypesOptions = propertyTypes.map((propertyType) => ({
    value: propertyType.name,
    label: propertyType.name,
  }));

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handlePropertyTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPropertyType(e.target.value);
  };

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBedrooms(e.target.value);
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBathrooms(e.target.value);
  };

  const handleApplyFilters = () => {
    setApplyFilters(true);
  };

  const filteredListings = applyFilters
    ? Listings.flatMap((listingCategory) =>
        listingCategory.items.filter((item) => {
          const matchesKeyword = keyword
            ? item.description.toLowerCase().includes(keyword.toLowerCase())
            : true;
          const matchesAddress = address
            ? item.address.toLowerCase().includes(address.toLowerCase())
            : true;
          const matchesPropertyType =
            propertyType === "All Types" || propertyType === null
              ? true
              : item.category === propertyType;
          const matchesBedrooms = bedrooms
            ? item.features.some((f) => f.name === "bd" && f.value >= bedrooms)
            : true;
          const matchesBathrooms = bathrooms
            ? item.features.some((f) => f.name === "ba" && f.value >= bathrooms)
            : true;

          return (
            matchesKeyword &&
            matchesAddress &&
            matchesPropertyType &&
            matchesBedrooms &&
            matchesBathrooms
          );
        }),
      )
    : Listings.flatMap((listingCategory) => listingCategory.items);

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.filters}>
          <div className={cn("heading-6")}>Find Property</div>
          <div className={styles.textfields}>
            <TextField
              placeholder="Find keyword"
              className={styles.textfield}
              withIcon
              icon={Ruler}
              value={keyword}
              onChange={handleKeywordChange}
            />
            <TextField
              placeholder="Enter your address"
              className={styles.textfield}
              withIcon
              icon={Building}
              value={address}
              onChange={handleAddressChange}
            />
            <Dropdown
              selectClassName={styles.dropdown}
              options={propertyTypesOptions}
              value={propertyType ?? ""}
              onChange={handlePropertyTypeChange}
              withIcon
              icon={Building}
            />
            <Dropdown
              selectClassName={styles.dropdown}
              options={bedroomsOptions}
              value={bedrooms ?? ""}
              onChange={handleBedroomsChange}
              withIcon
              icon={Location}
            />
            <Dropdown
              selectClassName={styles.dropdown}
              options={bathroomOptions}
              value={bathrooms ?? ""}
              onChange={handleBathroomsChange}
              withIcon
              icon={Bath}
            />
          </div>
          <button className={cn("label-medium", styles.textButton)}>
            Advanced Filter
          </button>
          <button
            className={cn("button", styles.button)}
            onClick={handleApplyFilters}
          >
            Submit
          </button>
        </div>

        <div className={styles.listings}>
          {filteredListings.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
