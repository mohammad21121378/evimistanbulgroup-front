"use client";

import React from "react";
import styles from "./testimonials.module.css";
import cn from "classnames";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import { motion } from "framer-motion";
import { Heading } from "@/components/typography";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/john-lisa.webp",
    name: "Ahmed S., UAE Investor",
    span: "Happy Homeowners",
    text: "“EvimIstanbul made my property purchase in Istanbul fast, legal, and stress-free. Their team helped me qualify for Turkish citizenship through real estate investment, and the process was smoother than I ever imagined. Highly recommended for serious international investors.”",
  },
  {
    id: 2,
    image: "/images/testimonials/sarah-michael.webp",
    name: "Sarah D., UK Relocation Client",
    span: "Happy Homeowners",
    text: "“We moved to Turkey with our two kids, and EvimIstanbul guided us from start to finish — school placement, residence permits, and finding the perfect home in Antalya. Their family relocation services are the best we’ve experienced abroad.”",
  },
  {
    id: 3,
    image: "/images/testimonials/emily-david.webp",
    name: "Khaled M., Investor from Qatar",
    span: "Happy Homeowners",
    text: "“I applied for Turkish citizenship by investing in property, and EvimIstanbul handled everything — from finding a legal project to managing the paperwork and translating documents. Their local expertise and transparent process gave me full confidence. I now own a luxury apartment in Istanbul and hold my Turkish passport.”",
  },
  {
    id: 4,
    image: "/images/testimonials/mohammad-afee.png",
    name: "Mohammad R., International Student from Pakistan",
    span: "Happy Homeowners",
    text: "“Thanks to EvimIstanbul, I was accepted into a Turkish university, secured student housing, and received my visa support without hassle. If you're planning to study in Turkey, trust them — they know exactly what to do.”",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        
        <Heading type="heading-3">Testimonials</Heading>

        <div className={styles.testimonial}>
          <div className={styles.testimonial_image}>
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={styles.testimonial_info}>
            <div>
              <div className={cn("heading-6", styles.text)}>
                {testimonials[current].text}
              </div>

              <div className={cn("paragraph-medium", styles.testimonial_name)}>
                ––– {testimonials[current].name}
                {/* ,&nbsp;
                <span className={styles.span}>
                  {testimonials[current].span}
                </span> */}
              </div>
            </div>

            <div className="flex justify-between items-center ">
              <div className={styles.btns}>
                <button
                  className={cn("button-stroke-small", styles.btn)}
                  onClick={prevSlide}
                >
                  {ChevronLeft}
                </button>

                <button
                  className={cn("button-stroke-small", styles.btn)}
                  onClick={nextSlide}
                >
                  {ChevronRight}
                </button>
              </div>

              <Link href="/about" className={cn("button ")}>
                View All Testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
