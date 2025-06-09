'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './guides-and-Insights-listing.module.css'

type GuidesAndInsightsListingProps = {
    category: string;
    categoryColor: string;
    timeToRead: string;
    title: string;
    description: string;
    imageSrc: string;
    date: string;
};

const GuidesAndInsightsListing: FC<GuidesAndInsightsListingProps> = ({
    category,
    categoryColor,
    timeToRead,
    title,
    description,
    imageSrc,
    date,
}) => {
    return (
        <div className={cn("rounded-xl overflow-hidden flex flex-col bg-white", styles.item)}>
            <div className="h-52 w-full relative">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-start gap-4 font-medium text-sm text-gray-500">
                    <span
                        className={`px-2 py-1 rounded font-medium text-white bg-blue-700`}
                    >
                        {category}
                    </span>
                    <span>{timeToRead}</span>
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>

                <div className="mt-2 flex items-center justify-between">
                    <button className={cn("text-sm text-black font-medium rounded-md pt-2 pb-2.5 px-4 flex items-center gap-1 border", styles.button)}>
                        Read more <span><svg className='mt-1 ml-1' width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79369 4.85072C5.97431 5.03134 5.97431 5.32413 5.79369 5.50474L1.07842 10.22C0.8978 10.4006 0.605011 10.4006 0.424391 10.22L0.206341 10.002C0.0257223 9.82137 0.0257223 9.52854 0.206341 9.34792L4.37655 5.17773L0.206341 1.00752C0.0257219 0.8269 0.0257219 0.53411 0.206341 0.353492L0.424391 0.135442C0.60501 -0.0451775 0.8978 -0.0451775 1.07842 0.135442L5.79369 4.85072Z" fill="currentColor" />
                        </svg>
                        </span>
                    </button>
                    <span className="text-xs text-gray-500 font-medium">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default GuidesAndInsightsListing