"use client";

import React from "react";
import styles from "./TestimonialCard.module.css";
import cn from "classnames";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "@/constants/icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import Button from "../ui/Button";

type TestimonialsProps = {
  viewAllLabel?: string;
  showNavigation?: boolean;
  showViewAllButton?: boolean;
  viewAllHref?: string;
  direction?: number;
  onNext?: () => void;
  onPrev?: () => void;
  showViewAllButtonLabel?: string;
  className?: string;

  id: number;
  image: string;
  name: string;
  span?: string;
  text: string;
  rating?: number;
};


export default function TestimonialCard({
                                          showNavigation = false,
                                          showViewAllButton = false,
                                          viewAllHref = "/client-stories",
                                          direction = 0,
                                          showViewAllButtonLabel = "View All",
                                          onNext,
                                          onPrev,
                                          className,
                                          id,
                                          image,
                                          name,
                                          span,
                                          text,
                                          rating,
                                        }: TestimonialsProps) {
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

  return (
      <div className={`${styles.testimonial} ${className}`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
              key={id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className={styles.testimonial_image}
          >
            <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
              key={"text-" + id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className={styles.testimonial_info}
          >
            <div>
              <div className={cn("heading-6 italic", styles.text)} dangerouslySetInnerHTML={{__html:text}}>

              </div>

              <div className={cn("paragraph-medium", styles.testimonial_name)}>
                –– {name},  {span}
              </div>

              {rating && (
                  <div className="mt-6">
                    <StarRating rating={rating} />
                  </div>
              )}
            </div>

            {(showNavigation || showViewAllButton) && (
                <div className="flex justify-between items-center mt-6">

                  {showNavigation && (
                      <div className={styles.btns}>
                        <button
                            className={cn("button-stroke-small", styles.btn)}
                            onClick={onPrev}
                            aria-label="Previous testimonial"
                        >
                          {ChevronLeft}
                        </button>

                        <button
                            className={cn("button-stroke-small", styles.btn)}
                            onClick={onNext}
                            aria-label="Next testimonial"
                        >
                          {ChevronRight}
                        </button>
                      </div>
                  )}

                  {showViewAllButton && (
                      <Button href={viewAllHref} flex size="auto">
                        {showViewAllButtonLabel} {ArrowRight}
                      </Button>
                  )}
                </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
  );
}
