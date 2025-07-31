import Image from "next/image";
import Link from "../ui/Link";
import styles from './highlights-and-features-listing.module.css';

type HighlightsAndFeaturesListingProps = {
  item: {
    id: string;
    image: string;
    title: string;
    bgColor: string;
  };
};

export default function HighlightsAndFeaturesListing({ item }: HighlightsAndFeaturesListingProps) {
  return (
    <Link href={`/properties-for-sale-in-turkey?feature=${item.id}`} className={`rounded-xl overflow-hidden shadow-lg hover:shadow-none transition-all duration-300 block ${styles.box}`}>
        
      <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
        <Image
          src={`/images/highlights/${item.image}`}
          alt={item.title}
          fill
          className="object-cover transition-all duration-500 rounded-t-xl"
        />
      </div>

      <div className={`${styles['glass-bg']}  py-4 px-3 h-[8.5rem] overflow-hidden transition-all duration-300`}>
        <div className="text-4xl truncate line-clamp-2 text-wrap leading-[2.8rem] relative z-10 font-semibold tex">
          {item.title}
        </div>
      </div>
    </Link>
  );
}
