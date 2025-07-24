"use client";
import TestimonialCard from "@/components/testimonial-card";
import { useTestimonials } from "../hooks/useTestimonials";
import Button from "@/components/ui/Button";
import SectionTopWithColor from "@/components/section-top-with-color";

export default function Hero() {
  const { testimonials, hasMore, loadMore } = useTestimonials(2);

  return (
    <>
      <SectionTopWithColor
        bg="bg-[#00000099]"
        breadcrumb={[{ label: 'Client Stories' }]}
        title="Client Stories & Testimonials" />

      <section className="bg-white py-12 px-4">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-brown-800 mb-2">Client Stories & Testimonials</h2>
          <p className="text-gray-600 mb-8">
            Real Experiences. Real Results. Trusted by Hundreds Worldwide.
          </p>
          <section className="section">
            <div className="container">
              <div className="space-y-6">
                {testimonials.map((t) => (
                  <TestimonialCard {...t} className="items-center" />
                ))}
              </div>
            </div>
          </section>
          {hasMore && (
            <div className="text-center mt-8 max-w-2xl w-full mx-auto">
              <Button
                size="full"
                onClick={loadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
