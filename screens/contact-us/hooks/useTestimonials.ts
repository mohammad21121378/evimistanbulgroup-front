import { useState } from "react";
import { Testimonial } from "../types";
import { testimonials } from "../constants";

export function useTestimonials(limit = 5) {

  const [visibleCount, setVisibleCount] = useState(limit);
  const [loading, setLoading] = useState(false);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const loadMore = () => {
      setLoading(true);
      
      setTimeout(() => {
          setLoading(false)
          setVisibleCount((prev) => prev + limit);
    }, 2000)
  };

  return { testimonials: visibleTestimonials, hasMore, loadMore, loading };
}
