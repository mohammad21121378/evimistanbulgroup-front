'use client';

import DualMarqueeDisplay from '@/components/dual-marquee-display';
import React from 'react';

type CityItem = {
  name: string;
  src: string;
};

type MarqueeProps = {
  data: {
    topItems: CityItem[];
    bottomItems: CityItem[];
  };
};

export default function Marquee({ data }: MarqueeProps) {
  return (
    <DualMarqueeDisplay
      topCities={data.topItems}
      bottomCities={data.bottomItems}
      prefixUrl={'/images/marquee-for-owners'}
    />
  );
}
