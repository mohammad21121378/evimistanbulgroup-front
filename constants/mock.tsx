import {
  Bath,
  DockDoor,
  DoubleBed,
  Floor,
  Parking,
  Ruler,
  Walk,
} from "./icons";

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
            icon: DoubleBed,
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "2,500",
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
            icon: DoubleBed,
            name: "bd",
            value: 4,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 3,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "4,500",
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
            icon: DoubleBed,
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2.5,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "3,200",
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
            icon: DoubleBed,
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "1,800",
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
            icon: DoubleBed,
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2.5,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "2,000",
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
            icon: DoubleBed,
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "2,200",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Condos",
    items: [
      {
        id: 1,
        title: "456 City Apartment",
        description:
          "A modern apartment in the city center with high ceilings, large windows, and a private balcony, ideal for urban living.",
        price: "$750,000",
        image: "/images/properties/apartments/456-city-apartment.webp",
        address: "456 City Apartment, San Francisco, CA",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "1,500",
          },
        ],
      },
      {
        id: 2,
        title: "789 Downtown Loft",
        description:
          "A chic loft in the heart of downtown, featuring an open floor plan, exposed brick, and modern finishes, perfect for trendy city living.",
        price: "$670,000",
        image: "/images/properties/apartments/789-downtown-loft.webp",
        address: "789 Downtown Loft, New York, NY",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 1,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 1,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "1,200",
          },
        ],
      },
      {
        id: 3,
        title: "321 Suburban Apartment",
        description:
          "A cozy apartment in a quiet suburb, featuring a modern kitchen, spacious living area, and a private balcony.",
        price: "$500,000",
        image: "/images/properties/apartments/321-suburban-apartment.webp",
        address: "321 Suburban Apartment, Chicago, IL",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 1.5,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "1,300",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Commercial",
    items: [
      {
        id: 1,
        title: "Downtown Office",
        description:
          "A prime office space located in the heart of downtown, featuring modern amenities, high-speed internet, and stunning city views.",
        price: "$2,500/month",
        image: "/images/properties/commercial/downtown-office.webp",
        address: "123 Main Street, Los Angeles, CA",
        features: [
          {
            id: 1,
            icon: Ruler,
            name: "sqft",
            value: "5,000",
          },
          {
            id: 2,
            icon: Floor,
            name: "Floors",
            value: 2,
          },
          {
            id: 3,
            icon: Parking,
            name: "Parking",
            value: "Yes",
          },
        ],
      },
      {
        id: 2,
        title: "Industrial Warehouse",
        description:
          "A spacious industrial warehouse with high ceilings, loading docks, and easy access to major highways, perfect for storage and distribution.",
        price: "$8,000/month",
        image: "/images/properties/commercial/industrial-warehouse.webp",
        address: "456 Industrial Road, San Francisco, CA",
        features: [
          {
            id: 1,
            icon: Ruler,
            name: "sqft",
            value: "20,000",
          },
          {
            id: 2,
            icon: DockDoor,
            name: "Dock Doors",
            value: 4,
          },
          {
            id: 3,
            icon: Parking,
            name: "Parking",
            value: "Yes",
          },
        ],
      },
      {
        id: 3,
        title: "Retail Space",
        description:
          "A retail space located in a busy shopping center, offering high foot traffic, ample parking, and a vibrant commercial environment.",
        price: "$4,500/month",
        image: "/images/properties/commercial/retail-space.webp",
        address: "789 Shopping Center Blvd, New York, NY",
        features: [
          {
            id: 1,
            icon: Ruler,
            name: "sqft",
            value: "3,000",
          },
          {
            id: 2,
            icon: Walk,
            name: "Foot Traffic",
            value: "High",
          },
          {
            id: 3,
            icon: Parking,
            name: "Parking",
            value: "Yes",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Villas",
    items: [
      {
        id: 1,
        title: "Ocean View Villa",
        description:
          "A luxurious villa with stunning ocean views, private pool, and spacious outdoor areas.",
        price: "$1,200,000",
        image: "/images/properties/villas/ocean-view-villa.webp",
        address: "123 Ocean Drive, Miami, FL",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 5,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 4,
          },
          {
            id: 3,
            icon: Parking,
            name: "sqft",
            value: "4,500",
          },
        ],
      },
      {
        id: 2,
        title: "Mountain Retreat",
        description:
          "A serene villa nestled in the mountains, featuring modern amenities and breathtaking views.",
        price: "$950,000",
        image: "/images/properties/villas/mountain-retreat.webp",
        address: "456 Alpine Road, Aspen, CO",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 4,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 3,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "3,800",
          },
        ],
      },
      {
        id: 3,
        title: "Luxury Estate",
        description:
          "An expansive estate with elegant interiors, a large garden, and state-of-the-art facilities.",
        price: "$2,500,000",
        image: "/images/properties/villas/luxury-estate-villa.webp",
        address: "789 Estate Drive, Beverly Hills, CA",
        features: [
          {
            id: 1,
            icon: DoubleBed,
            name: "bd",
            value: 6,
          },
          {
            id: 2,
            icon: Bath,
            name: "ba",
            value: 5,
          },
          {
            id: 3,
            icon: Ruler,
            name: "sqft",
            value: "7,200",
          },
        ],
      },
    ],
  },
];

export { Tabs, Listings };
