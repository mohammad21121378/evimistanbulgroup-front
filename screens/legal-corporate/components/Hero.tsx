"use client";

import SectionTopWithColor from "@/components/section-top-with-color";

export default function Hero() {
  return (
    <SectionTopWithColor
      bg="bg-[#000000]"
      breadcrumb={[{ label: 'Legal & Corporate' }]}
      title={`Legal & \nCorporate`}
    />
  );
}
