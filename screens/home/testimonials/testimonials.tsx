"use client";

import React,{ useEffect, useState } from "react";
import styles from "./testimonials.module.css";
import cn from "classnames";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "@/constants/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Heading } from "@/components/typography";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import StarRating from "@/components/ui/StarRating";
import TestimonialCard from "@/components/testimonial-card";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import {TestimonialData} from "../../client-stories/types";



const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/john-lisa.webp",
    name: "Ahmed S., UAE Investor",
    span: "Happy Homeowners",
    text: "“EvimIstanbul made my property purchase in Istanbul fast, legal, and stress-free. Their team helped me qualify for Turkish citizenship through real estate investment, and the process was smoother than I ever imagined. Highly recommended for serious international investors.”",
    rating: 4
  },
  {
    id: 2,
    image: "/images/testimonials/sarah-michael.webp",
    name: "Sarah D., UK Relocation Client",
    span: "Happy Homeowners",
    text: "“We moved to Turkey with our two kids, and EvimIstanbul guided us from start to finish — school placement, residence permits, and finding the perfect home in Antalya. Their family relocation services are the best we’ve experienced abroad.”",
    rating: 4
  },
  {
    id: 3,
    image: "/images/testimonials/emily-david.webp",
    name: "Khaled M., Investor from Qatar",
    span: "Happy Homeowners",
    text: "“I applied for Turkish citizenship by investing in property, and EvimIstanbul handled everything — from finding a legal project to managing the paperwork and translating documents. Their local expertise and transparent process gave me full confidence. I now own a luxury apartment in Istanbul and hold my Turkish passport.”",
    rating: 5
  },
  {
    id: 4,
    image: "/images/testimonials/mohammad-afee.png",
    name: "Mohammad R., International Student from Pakistan",
    span: "Happy Homeowners",
    text: "“Thanks to EvimIstanbul, I was accepted into a Turkish university, secured student housing, and received my visa support without hassle. If you're planning to study in Turkey, trust them — they know exactly what to do.”",
    rating: 5
  },
];

interface TestimonialObject{
  testimonial:TestimonialData[],
  pagination:{
    total:number
  }
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const [direction, setDirection] = useState(0);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };


  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 0.95,
      transition: { duration: 0.5 },
    }),
  };


  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const testimonials = await fetchTestimonials(4, 0,locale) as TestimonialObject;
        const testimonialsData=testimonials?.testimonial
        setTestimonials(testimonialsData);
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>

      <h2 className="heading-3">{t("title")}</h2>
        <div className={cn("paragraph-large", styles.subtitle)}>
          Real experiences from global clients who’ve invested, relocated, or started a new life in Turkey with EvimIstanbul Group.
        </div>


        {testimonials && testimonials.length> 0 &&<TestimonialCard
          {...testimonials[current]}
          direction={direction}
          onNext={nextSlide}
          onPrev={prevSlide}
          showNavigation={true}
          showViewAllButton={true}
          showViewAllButtonLabel={t("viewAll")}
        />}

      </div>
    </section>
  );
}
