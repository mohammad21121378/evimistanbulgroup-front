import React from "react";
import styles from "./gallery.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <Heading type="heading-3">Explore Our Stunning Properties</Heading>

        <div className={styles.images_grid}>
          <div className={styles.column}>
            <div className={styles.large_image}>
              <Image
                src="/images/properties/houses/989-bliss-boulevard.webp"
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.small_image}>
              <Image
                src="/images/gallery/01.webp"
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.small_image}>
              <Image
                src="/images/gallery/03.webp"
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.large_image}>
              <Image
                src="/images/gallery/02.webp"
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
