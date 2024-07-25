import { Building } from "./icons";

const Tabs = [
  {
    id: 1,
    name: "Houses",
  },
  {
    id: 2,
    name: "Townhouses",
  },
  {
    id: 3,
    name: "Apartments",
  },
  {
    id: 4,
    name: "Condos",
  },
  {
    id: 5,
    name: "Land",
  },
  {
    id: 6,
    name: "Commercial",
  },
];

const Listings = [
  {
    id: 1,
    category: "Houses",
    items: [
      {
        id: 1,
        title: "123 Serenity Lane",
        description:
          "A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.",
        price: "$850,000",
        image: "/images/properties/houses/123-serenity-lane.webp",
        address: "123 Serenity Lane, Los Angeles, CA",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 3,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "2,500 sqft",
          },
        ],
      },
      {
        id: 2,
        title: "456 Harmony Drive",
        description:
          "A beautiful and spacious home with a large garden, swimming pool, and stunning views of the city, perfect for those who love to entertain.",
        price: "$550,000",
        image: "/images/properties/houses/456-harmony-drive.webp",
        address: "456 Harmony Drive, Los Angeles, CA",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 4,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 3,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "4,500 sqft",
          },
        ],
      },
      {
        id: 3,
        title: "789 Bliss Boulevard",
        description:
          "A stunning and luxurious home with a large garden, swimming pool, and breathtaking views of the ocean, perfect for those who love the finer things in life.",
        price: "$650,000",
        image: "/images/properties/houses/989-bliss-boulevard.webp",
        address: "989 Bliss Boulevard, Los Angeles, CA",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 3,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2.5,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "3,200 sqft",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Townhouses",
    items: [
      {
        id: 1,
        title: "123 Modern Townhouse",
        description:
          "A stylish townhouse with contemporary design, featuring a rooftop terrace, open living spaces, and modern amenities.",
        price: "$450,000",
        image: "/images/properties/townhouses/123-modern-townhouse.webp",
        address: "123 Modern Townhouse, San Francisco, CA",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 2,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "1,800 sqft",
          },
        ],
      },
      {
        id: 2,
        title: "456 Urban Townhome",
        description:
          "An urban townhome located in the heart of the city, offering convenient access to shopping, dining, and entertainment.",
        price: "$375,000",
        image: "/images/properties/townhouses/456-urban-townhouse.webp",
        address: "456 Urban Townhome, New York, NY",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 3,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2.5,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "2,000 sqft",
          },
        ],
      },
      {
        id: 3,
        title: "789 Suburban Townhouse",
        description:
          "A charming townhouse located in a quiet suburb, featuring a spacious layout, modern kitchen, and private backyard.",
        price: "$420,000",
        image: "/images/properties/townhouses/789-suburban-townhouse.webp",
        address: "789 Suburban Townhouse, Chicago, IL",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 3,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "2,200 sqft",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Apartments",
    items: [
      {
        id: 1,
        title: "123 Serenity Lane",
        description:
          "A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.",
        price: "$850,000",
        image: "/images/header-background.webp",
        address: "123 Serenity Lane, Los Angeles, CA",
        features: [
          {
            id: 1,
            icon: Building,
            name: "Beds",
            value: 3,
          },
          {
            id: 2,
            icon: Building,
            name: "Baths",
            value: 2,
          },
          {
            id: 3,
            icon: Building,
            name: "Area",
            value: "2,500 sqft",
          },
        ],
      },
    ],
  },
];

export { Tabs, Listings };
