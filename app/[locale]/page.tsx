import HomePage from "@/screens/home";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import { TestimonialObject } from "@/screens/home/testimonials/testimonials";
import ReviewSchema from "@/components/review-schema/ReviewSchema";

export const generateMetadata = createGenerateMetadata("home");

type Props = {
  params: { locale: string };
};

export default async function Home({ params }: Props) {

  const { locale } = params;

  const testimonials = await fetchTestimonials(4, 0, locale) as TestimonialObject;

  return (
    <>
      {
        testimonials?.testimonial && <ReviewSchema testimonials={testimonials?.testimonial} />
      }
      <HomePage testimonials={testimonials} />
    </>
  );
}