"use client";
import TestimonialCard from "@/components/testimonial-card";
import { useTestimonials } from "../hooks/useTestimonials";
import Button from "@/components/ui/Button";
import SectionTopWithColor from "@/components/section-top-with-color";
import {Testimonial, TestimonialData} from "../types";


interface HeroProps {
  current_testimonials: Testimonial[];
  total: number;
}
export default function Hero({current_testimonials,total}:HeroProps) {
  const { testimonials, hasMore, loadMore, loading } = useTestimonials({limit:4, testimonials:current_testimonials, total});

  return (
    <>
      <SectionTopWithColor
        bg="bg-[#EA580C]"
        breadcrumb={[{ label: 'Client Stories' }]}
        title="Client Stories & Testimonials" />

      <div className="container mt-6">
        <section className="section !pb-6 !mb-0">

          <h2 className="text-3xl font-bold mb-8">
            Real Experiences. Real Results. Trusted by Hundreds Worldwide.
          </h2>

          <p className="text-lg font-normal">
            At EvimIstanbul Group, our success is measured by the success and satisfaction of our clients. From investors and students to families and professionals, we’ve helped people from over 30 countries turn their dreams of living, working, studying, or investing in Turkey into reality.
          </p>
        </section>

        <div className="space-y-10 my-14">
          {testimonials.map((t:TestimonialData) => (
            <TestimonialCard {...t} className="items-center" />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mb-16 max-w-2xl w-full mx-auto">
            <Button
            loading={loading}
              size="full"
              onClick={loadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>

    </>
  );
}
