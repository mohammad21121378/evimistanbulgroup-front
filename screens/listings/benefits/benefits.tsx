import classNames from "classnames";

import styles from './benefits.module.css'
import SectionWithGlass from "@/components/section-with-glass";

export default function Benefits() {
  return (
    <SectionWithGlass className="py-14">
      <div className="container">
          <h1 className="heading-4 text-gray-800">
            Why Invest In Real Estate In Turkey?
          </h1>
          <p className="pt-7 text-gray-700 paragraph-large">
            Turkey sits at a strategic point between Europe and Asia, offering high-growth real estate markets, cost-effective entry points, and attractive citizenship-by-investment options. Whether you're seeking a sea-view apartment, a family villa, or a rental-income commercial asset, our verified listings cover key markets — Istanbul, Antalya, İzmir, Bodrum, Bursa, Mersin, Yalova, and beyond . With every property legally vetted and selected for long-term value and safety, EvimIstanbul empowers you to invest, relocate, or settle in Turkey with confidence.
          </p>
        </div>
    </SectionWithGlass>
  );
}