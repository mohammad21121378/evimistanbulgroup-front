import { useState } from "react";
import { Testimonial,TestimonialData } from "../types";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import { useLocale, useTranslations } from "next-intl";

interface Props {
    limit?: number;
    testimonials: TestimonialData[];
    total: number;
}
export function useTestimonials({limit = 5,testimonials,total}:Props) {
  const locale = useLocale();
  const [visibleCount, setVisibleCount] = useState(limit);
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials);
  const [loading, setLoading] = useState(false);

  const hasMore = visibleCount < total;

  const loadMore = async () => {
      setLoading(true);
      const newTestimonials = await fetchTestimonials(limit, visibleCount,locale);
      setVisibleTestimonials((prev) => [...prev, ...newTestimonials.testimonial]);
      setLoading(false)
      setVisibleCount((prev) => prev + limit);
  };

  return { testimonials: visibleTestimonials, hasMore, loadMore, loading };
}
