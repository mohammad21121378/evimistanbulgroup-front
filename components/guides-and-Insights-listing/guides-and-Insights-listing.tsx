'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './guides-and-Insights-listing.module.css'
import { useTranslations } from 'next-intl';
import Link from '../ui/Link';
import classNames from 'classnames';

type GuidesAndInsightsListingProps = {
    CatSlug: string | null;
    CatName: string | null;
    slug: string;
    timeToRead: number;
    title: string;
    excerpt: string;
    created_at: string;
    media: {
        alt:string,
        url:string,
    };
};

const GuidesAndInsightsListing: FC<GuidesAndInsightsListingProps> = ({
    CatName,
    CatSlug,
    timeToRead,
    title,
    slug,
    excerpt,
    media,
    created_at,
}) => {

    const t = useTranslations("guidesAndInsightsListing");

    return (
        <div className={cn("rounded-xl overflow-hidden flex flex-col bg-white h-full", styles.item)}>
            <Link
                href={`/our-insights/${CatSlug}/${slug}`} className={classNames("h-48 w-full relative", styles.imageWrapper)}>
                <Image src={media.url} alt={media.alt} fill className="object-cover" />
            </Link>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-start gap-4 font-medium text-sm text-gray-500">
                    <Link
                        href={`/our-insights/${CatSlug}`}
                        className={`px-2 py-1 rounded font-medium text-white bg-blue-700`}
                    >
                        {CatName}
                    </Link>
                    <span>{timeToRead} min read</span>
                </div>
                <Link href={`/our-insights/${CatSlug}/${slug}`} className="text-xl font-bold hover:text-orange-600">{title}</Link>
                <div className="text-sm text-gray-500 mb-2 line-clamp-2" dangerouslySetInnerHTML={{__html:excerpt}}></div>

                <div className="mt-auto flex items-center justify-between">
                    <Link href={`/our-insights/${CatSlug}/${slug}`} className={cn("text-sm text-black font-medium rounded-md pt-2 pb-2.5 px-4 flex items-center gap-1 border", styles.button)}>
                        {t("readMore")} <span className='mt-0.5 ml-1 pr-px'><svg  width="0.4rem" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79369 4.85072C5.97431 5.03134 5.97431 5.32413 5.79369 5.50474L1.07842 10.22C0.8978 10.4006 0.605011 10.4006 0.424391 10.22L0.206341 10.002C0.0257223 9.82137 0.0257223 9.52854 0.206341 9.34792L4.37655 5.17773L0.206341 1.00752C0.0257219 0.8269 0.0257219 0.53411 0.206341 0.353492L0.424391 0.135442C0.60501 -0.0451775 0.8978 -0.0451775 1.07842 0.135442L5.79369 4.85072Z" fill="currentColor" />
                        </svg>
                        </span>
                    </Link>
                    <span className="text-sm text-gray-500 font-medium">{created_at}</span>
                </div>
            </div>
        </div>
    );
};

export default GuidesAndInsightsListing