import cn from "classnames";
import Image from "next/image";
import styles from "./property-listing.module.css";

type PropertyListingProps = {
  item: {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
    features: {
      id: string;
      icon: React.ReactNode;
      name: string;
      value: string;
    }[];
  };
};

export default function PropertyListing({ item }: PropertyListingProps) {
  return (
    <div key={item.id} className={styles.listing}>
      <div className={styles.img_holder}>
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className={cn("paragraph-small", styles.listing_price)}>
          {item.price}
        </div>
      </div>
      <div className={styles.listing_wrapper}>
        <div className={cn("heading-6", styles.listing_title)}>
          {item.title}
        </div>
        <div className={cn("paragraph-medium", styles.listing_description)}>
          {item.description}
        </div>

        <div className={styles.features}>
          {item.features.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              {feature.icon}
              <div className={cn("paragraph-small", styles.feature_name)}>
                {feature.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
