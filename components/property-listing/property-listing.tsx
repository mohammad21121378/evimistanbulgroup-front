import cn from "classnames";
import Image from "next/image";
import styles from "./property-listing.module.css";
import PropertyFeatures from "../property-features";
import { Location2 } from "@/constants/icons";
import Link from "../ui/Link";
import { formatNumber } from "@/utils/formatNumber";
import { PropertyType } from "@/types/Property";
import Offers from "./offers";

interface PropertyListingProps extends PropertyType {
  className?: string;
  scale?: number;
  size?: 'default' | 'small'
}

export default function PropertyListing({
  item,
  className,
  scale = 1,
  size = 'default'
}: PropertyListingProps) {
  const link = `/properties-for-sale-in-turkey/${item.category}/${item.title}`;

  return (
    <div
      className={cn(styles.wrapper, { [styles.small]: size === 'small' }, { 'pl-1.5 pr-1': size === 'small' })}
      style={{ "--scale": scale } as React.CSSProperties}
    >
      <div
        className={cn(styles.listing, className, styles.scaled)}
      >

        <Link href={link} className={styles.img_holder}>
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
          {item.status === "sold_out" && (
            <div className={cn("paragraph-small uppercase", styles.listing_status)}>
              ALREADY SOLD
            </div>
          )}
        </Link>

        <Offers offers={
          [
            "Limited-Time Offer",
            "Special Discount",
          ]} />


        <div className={styles.listing_wrapper}>
          <Link
            href={link}
            className={cn("heading-6 hover:text-orange-500", styles.listing_title)}
          >
            {item.title}
          </Link>
          <Link
            href={`/properties-for-sale-in-turkey?location=2.1`}
            className={cn(
              "paragraph-medium font-medium flex items-center gap-2.5 underline",
              styles.listing_description
            )}
          >
            {Location2}
            {item.location}
          </Link>
          <div
            className={cn(
              "paragraph-medium line-clamp-2 truncate w-full text-wrap",
              styles.listing_description
            )}
          >
            {item.description}
          </div>
          <p className="text-lg font-medium text-[#1A1A1A]">
            {formatNumber(item.price)} MIN –– {formatNumber(item.price)} MAX
          </p>
          <div className="flex justify-between items-center">
            <PropertyFeatures features={item.features} className={styles.features} />
            <div className={cn("text-sm pt-3.5 font-normal text-gray-500")}>12h ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
