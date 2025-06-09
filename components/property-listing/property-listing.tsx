import cn from "classnames";
import Image from "next/image";
import styles from "./property-listing.module.css";
import Link from "next/link";
import PropertyFeatures from "../property-features";
import { Location, Location2 } from "@/constants/icons";

type PropertyListingProps = {
  item: {
    id: number;
    images: string[];
    title: string;
    price: string;
    description: string;
    category: string;
    location: string;
    features: {
      id: number;
      icon: string;
      name: string;
      value: string | number;
    }[];
  };
};

export default function PropertyListing({ item }: PropertyListingProps) {
  return (
    <div key={item.id} className={styles.listing}>
      <Link
        href={{
          pathname: "/property-detail",
          query: { item: JSON.stringify(item) },
        }}
        className={styles.img_holder}
      >
        <Image
          src={item.images && item.images[0]}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className={cn("paragraph-small", styles.listing_price)}>
          {item.category}
        </div>
      </Link>
      <div className={styles.listing_wrapper}>
        <div className={cn("heading-6", styles.listing_title)}>
          {item.title}
        </div>
        <div className={cn("paragraph-medium font-medium flex items-center gap-2.5 underline", styles.listing_description)}>
          {Location2}
          {item.location}
        </div>
        <div className={cn("paragraph-medium  line-clamp-2 truncate w-full text-wrap", styles.listing_description)}>
          {item.description}
        </div>
        <p className="text-lg font-medium text-[#1A1A1A]">
          {item.price} MIN –– {item.price} MAX
        </p>
        <div className="flex justify-between !items-center">
          <PropertyFeatures
            features={[...item.features, '']}
            className={styles.features}
          />
          <div className={cn("paragraph-medium !text-sm pt-3.5 !font-bold text-gray-500")}>
            12h ago
          </div>
        </div>

      </div>
    </div>
  );
}
