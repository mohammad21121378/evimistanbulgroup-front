import cn from "classnames";
import Image from "next/image";
import styles from "./property-listing.module.css";
import PropertyFeatures from "../property-features";
import { Location2 } from "@/constants/icons";
import Link from "../ui/Link";
import { formatNumber } from "@/utils/formatNumber";
import { PropertyType } from "@/types/Property";
import Offers from "./offers";
import getCategory from "@/utils/getCategory";

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
  const link = `${item.url ?? "#"}`;


  return (
    <div
      className={cn(styles.wrapper, { [styles.small]: size === 'small' }, { 'pl-1.5 pr-1': size === 'small' })}
      style={{ "--scale": scale } as React.CSSProperties}
    >
      <div
        className={cn(styles.listing, className, styles.scaled)}
      >

        <div className={styles.img_holder}>

        <Link href={link}>
          <Image
            src={item.images?.[0] ?? '/'}
            alt={item.images?.[1] ?? item.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
              </Link>

          <Link href={`/properties-for-sale-in-turkey?type=${item.category && getCategory(item.category)}`} noLink={!item.category} className={cn("paragraph-small", styles.listing_price)}>
            {item.category}
          </Link>

          {item.status === "sold_out" && (
            <div className={cn("paragraph-small uppercase", styles.listing_status)}>
              ALREADY SOLD
            </div>
          )}
          </div>

        {item.special_features && item.special_features?.length > 1 && (
          <Offers
            offers={item.special_features.map(feature => feature.title)}
            small={size === 'small'}
          />
        )}


        <div className={styles.listing_wrapper}>
          <Link
            href={link}
            className={cn("heading-6 hover:text-orange-500", styles.listing_title)}
          >
            {item.title}
          </Link>
          <div

            className={cn(
              "paragraph-medium font-medium flex items-center gap-2.5 underline",
              styles.listing_description
            )}
          >
            {Location2}
            <div>
              <Link
                  href={`/properties-for-sale-in-turkey?location=${item.locationID}`}
                  className={cn(
                      "paragraph-medium font-medium  underline",
                      styles.listing_description
                  )}
              >

                {item.location}
              </Link>,
              <Link
                  href={`/properties-for-sale-in-turkey?location=${item.parentLocationID}`}
                  className={cn(
                      "paragraph-medium font-medium  underline",
                      styles.listing_description
                  )}
              >

                {item.parentLocation}
              </Link>
            </div>
          </div>
          <div
            className={cn(
              "paragraph-medium line-clamp-2 truncate w-full text-wrap",
              styles.listing_description
            )}
            dangerouslySetInnerHTML={{ __html: item.description ?? '' }}

          >

          </div>
          <p className="text-lg font-medium text-[#1A1A1A]">

            {item.min_price && item.max_price ? (
              <>
                ${formatNumber(item.min_price)} MIN – ${formatNumber(item.max_price)} MAX
              </>
            ) : item.min_price ? (
              <>
                ${formatNumber(item.min_price)}
              </>
            ) : item.max_price ? (
              <>
                ${formatNumber(item.max_price)}
              </>
            ) : null}

          </p>
          <div className="flex justify-between items-center">
            <PropertyFeatures features={item.features} className={styles.features} />
            <div className={cn("text-sm pt-3.5 font-normal text-gray-500")}>{item.created_at}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
