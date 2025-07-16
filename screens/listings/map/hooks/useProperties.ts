import { useState, useEffect, useMemo } from "react";
import { Property } from "../types";

export const useProperties = () => {
  // const [properties, setProperties] = useState<Property[]>([]);

  const properties = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => (
      {
        id: i,
        title: `123 Serenity Lane ${i + 1}`,
        status: 'sold_out',
        location: 'Sariyer, Istanbul',
        category: "Houses",
        description:
          "A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.",
        price: 850000,
        images: [
          "/images/properties/houses/123-serenity-lane.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "123 Serenity Lane, Los Angeles, CA",
        agent: {
          name: "David Lee",
          image: "/images/team/david-lee.webp",
          email: "davidlee@support.com",
          phone: "(123) 456-7890",
        },
        lat: 40.7 + Math.random() * 0.2,
        lng: 29 + Math.random() * 0.2,
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: "ruler",
            name: "m²",
            value: "2,500",
          },
        ],
  
      }));
  }, []) 

  return { properties };
};