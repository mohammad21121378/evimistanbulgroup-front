import { useState } from "react";
import { Testimonial } from "../types";
import { testimonials } from "../constants";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import { useLocale, useTranslations } from "next-intl";

export function useTestimonials(limit = 5,testimonials,total) {
  const locale = useLocale();
  const [visibleCount, setVisibleCount] = useState(limit);
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials);
  const [loading, setLoading] = useState(false);

  const hasMore = visibleCount < total;

  const loadMore = async () => {
      setLoading(true);
      const newTestimonials = await fetchTestimonials(limit, 0,locale);
      setVisibleTestimonials((prev) => [...prev, ...newTestimonials.testimonial]);
      setLoading(false)
      setVisibleCount((prev) => prev + limit);
  };

  return { testimonials: visibleTestimonials, hasMore, loadMore, loading };
}
