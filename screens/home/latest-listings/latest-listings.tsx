import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import { Building } from "@/constants/icons";
import Image from "next/image";

const listings = [
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
        image: "/images/properties/123-serenity-lane.webp",
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
  {
    id: 2,
    category: "Townhouses",
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

export default function LatestListings() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <Heading type="heading-3" className={styles.title}>
              Latest Property Listings
            </Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              Discover the newest additions to our exclusive real estate
              portfolio.
            </div>
          </div>

          <button className={cn("button", styles.button)}>
            View All Listings
          </button>
        </div>

        <div className={styles.wrapper}>
          {/* <div>Tabs</div> */}
          <div className={styles.listings}>
            {listings.flatMap((listing) =>
              listing.items.map((item) => (
                <div key={listing.id} className={styles.listing}>
                  <div className={styles.img_holder}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />

                    <div
                      className={cn("paragraph-small", styles.listing_price)}
                    >
                      {item.price}
                    </div>
                  </div>
                  <div className={styles.listing_wrapper}>
                    <div className={cn("heading-6", styles.listing_title)}>
                      {item.title}
                    </div>
                    <div
                      className={cn(
                        "paragraph-medium",
                        styles.listing_description,
                      )}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
