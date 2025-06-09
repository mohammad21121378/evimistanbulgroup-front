// app/components/highlights-and-features-listing.tsx

import Image from "next/image";

type HighlightsAndFeaturesListingProps = {
    item: {
        image: string;
        title: string;
        bgColor: string;
    }
}

export default function HighlightsAndFeaturesListing({item}: HighlightsAndFeaturesListingProps) {
    return (

        <div className="rounded-md overflow-hidden">
            <div className="relative w-full h-40">
                <Image
                    src={`/images/highlights/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className={`${item.bgColor} text-white py-4 px-3 text-3xl truncate line-clamp-2 text-wrap font-medium`}>
                {item.title}
            </div>
        </div>
    );
}
