import React from "react";
import styles from "./partners.module.css";
import cn from "classnames";
import Image from "next/image";
import { Heading } from "@/components/typography";
import { Bankrate, Corning, Flexport } from "@/constants/icons";
import Link from "next/link";

export default function Partners() {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3" className={cn("h2", styles.title)}>
          Who We Are?
          </Heading>
          <p className={cn("paragraph-2x-large font-bold", styles.text)}>
          EvimIstanbul® is a trusted bridge between global clients and Opportunities in Turkey.
          </p>
          <p className={cn("paragraph-large", styles.text)}>
          We help individuals and families invest, settle, and thrive by offering tailored solutions — from real estate to citizenship and legal pathways to education, healthcare, and lifestyle services. With multilingual support and a deep local network, we deliver clarity, safety, and long-term value every step of the way.
          </p>
          <Link href="/about" className={cn("button", styles.button)}>
          Company Milestones
          </Link>
        </div>
        <div className={styles.partners}>
          <div className={styles.image_container}>
            <Image
              src="/images/partners/flexport.webp"
              alt="partners"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.logo}>{Flexport}</div>
          </div>

          <div className={styles.side_images}>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/check.webp"
                alt="partners"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.logo}><svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75132 26.4998C11.9595 26.4998 15.1326 25.1051 16.9806 22.0714L12.7613 19.3864C11.8894 20.6068 10.6341 21.339 9.13481 21.339C6.86813 21.339 5.43857 19.6303 5.85697 17.2244C6.27551 14.7835 8.29786 13.2492 10.5642 13.2492C12.0638 13.2492 13.1446 13.9118 13.6679 15.1323L18.4451 12.6216C17.3292 9.97154 14.7836 8.08852 11.0179 8.08852C5.71766 8.08852 1.42849 11.8546 0.626441 16.9455C-0.21006 22.3154 3.17219 26.4998 8.75132 26.4998ZM29.9658 8.08852C27.9783 8.08852 26.0256 8.89056 24.8401 10.2157L25.5755 5.89091C25.8653 4.1851 26.0104 3.33226 25.7859 2.66129C25.5574 1.97795 25.0761 1.40794 24.4407 1.06814C23.8168 0.734375 22.952 0.734375 21.2215 0.734375L16.8199 26.0117H18.2596C19.6076 26.0117 20.2812 26.0117 20.8294 25.7676C21.3127 25.5524 21.7259 25.2054 22.0215 24.7667C22.3568 24.2693 22.4734 23.6055 22.7069 22.2782L23.7245 16.4922C24.1428 13.9816 25.7469 12.9006 27.5599 12.9006C29.2336 12.9006 30.4544 13.8422 30.0705 16.0738L28.327 26.0117H33.5574L35.4404 15.3068C36.2425 10.6689 33.5574 8.08852 29.9658 8.08852ZM46.4578 8.08852C41.1925 8.08852 36.8341 11.9244 36.0321 16.9455C35.1953 22.1758 38.3336 26.4998 44.3658 26.4998C47.6088 26.4998 50.0147 25.5236 52.0371 23.4661L48.3757 20.4673C47.3648 21.4088 46.179 21.8275 44.7145 21.8275C43.0407 21.8275 41.4366 21.3041 41.1229 19.3864H53.6061C53.8852 18.654 54.0944 17.7126 54.1643 17.2941C55.1406 11.994 51.5141 8.08852 46.4578 8.08852ZM41.8551 15.4112C42.7266 13.6676 44.2613 12.7263 46.1092 12.7263C47.7131 12.7263 49.0732 13.4585 49.2476 15.4112H41.8551ZM63.0305 26.4998C66.2386 26.4998 69.4117 25.1051 71.2597 22.0714L67.0406 19.3864C66.169 20.6068 64.9135 21.339 63.4141 21.339C61.1473 21.339 59.7177 19.6303 60.1362 17.2244C60.5547 14.7835 62.5771 13.2492 64.8436 13.2492C66.343 13.2492 67.4239 13.9118 67.9472 15.1323L72.7244 12.6216C71.6086 9.97154 69.0628 8.08852 65.2971 8.08852C59.997 8.08852 55.7078 11.8546 54.906 16.9455C54.069 22.3154 57.4512 26.4998 63.0305 26.4998ZM90.3819 8.57672H84.3496L78.1079 15.7948L79.8335 5.88731C80.128 4.19603 80.2754 3.35053 80.0587 2.68406C79.832 1.98685 79.3429 1.40519 78.695 1.06214C78.0757 0.734375 77.2174 0.734375 75.5006 0.734375L71.099 26.0117H72.5372C73.8854 26.0117 74.5594 26.0117 75.1078 25.7674C75.5911 25.552 76.0043 25.2051 76.2999 24.7663C76.6352 24.2684 76.7518 23.6044 76.9848 22.2764L77.7241 18.0615L81.9085 26.0117H87.4876L82.6759 17.2941L90.3819 8.57672Z" fill="#00CC39"/>
</svg>
</div>
            </div>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/corning.webp"
                alt="partners"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.logo}>{Corning}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
