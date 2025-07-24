import { useState } from "react";
import { Testimonial } from "../types";
import { testimonials } from "../constants";

export function useTestimonials(limit = 5) {
  const [visibleCount, setVisibleCount] = useState(limit);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + limit);
  };

  return { testimonials: visibleTestimonials, hasMore, loadMore };
}
