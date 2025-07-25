
import Image from "next/image";
import Link from "../ui/Link";

type HighlightsAndFeaturesListingProps = {
    item: {
        id: string;
        image: string;
        title: string;
        bgColor: string;
    }
}

export default function HighlightsAndFeaturesListing({item}: HighlightsAndFeaturesListingProps) {
    return (

        <Link href={`/properties-for-sale-in-turkey?feature=${item.id}`} className="rounded-md overflow-hidden">
            <div className="relative w-full h-52">
                <Image
                    src={`/images/highlights/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className={`${item.bgColor} text-white py-4 px-3 text-4xl truncate line-clamp-2 text-wrap font-medium leading-[2.8rem] h-[8.5rem] overflow-hidden`}>
                {item.title}
            </div>

        </Link>
    );
}
