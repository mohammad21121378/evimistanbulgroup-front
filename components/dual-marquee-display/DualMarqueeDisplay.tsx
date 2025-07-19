'use client';

import React from 'react';
import cn from 'classnames';
import styles from './DualMarqueeDisplay.module.css';
import TextMarquee from '@/components/text-marquee';
import { Heading } from '../typography';

type PrefixUrlType = string

type CityItem = {
    name: string;
    src: string;
};

type Props = {
    topCities: CityItem[];
    bottomCities: CityItem[];
    prefixUrl?: PrefixUrlType
};

const MarqueeList = ({ items, direction = 'left', prefixUrl }: { items: CityItem[]; direction?: 'left' | 'right', prefixUrl?: PrefixUrlType }) => (
    <div className={styles.marquee}>
        <TextMarquee direction={direction}>
            {items.map((item, index) =>
                item.name === '・' ? (
                    <Heading key={index} type="heading-3" className={styles.marquee_text}>
                        {item.name}
                    </Heading>
                ) : (
                    <div key={index} className="relative">
                        <img
                            src={`${prefixUrl}/${item.src}`}
                            alt={item.name}
                            className="w-full max-h-20"
                        />
                    </div>
                )
            )}
        </TextMarquee>
    </div>
);

export default function DualMarqueeDisplay({ topCities, bottomCities, prefixUrl }: Props) {
    return (
        <section className={cn('section')}>
            <div className={styles.marquees}>
                <MarqueeList items={topCities} direction="left" prefixUrl={prefixUrl} />
                <MarqueeList items={bottomCities} direction="right" prefixUrl={prefixUrl} />
            </div>
        </section>
    );
}
