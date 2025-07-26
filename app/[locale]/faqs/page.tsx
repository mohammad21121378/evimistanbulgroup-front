import ReviewSchema from "@/components/review-schema/ReviewSchema";
import Faq from "@/screens/faq";
import Head from "next/head";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"

type Props = {
  params: { locale: string };
};

// export const generateMetadata = createGenerateMetadata("faq");

export default async function Page({ params }: Props) {
  // const { locale } = params;
  // const testimonials = await fetchTestimonials(4, 0, locale);
  // const testimonialsData = testimonials?.testimonial
  // const total = testimonials?.pagination?.total

  return (
    <>
      {/* <Head>
        <ReviewSchema testimonials={testimonialsData} />
      </Head> */}
      <Faq />
    </>)
}

