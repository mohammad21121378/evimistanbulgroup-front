import ReviewSchema from "@/components/review-schema/ReviewSchema";
import ClientStories from "@/screens/client-stories";
import Head from "next/head";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"

type Props = {
    params: { locale: string };
};

export const generateMetadata = createGenerateMetadata("client-stories");

export default async function Page({params}: Props) {
    const { locale } = params;
    const testimonials = await fetchTestimonials(4, 0,locale);
    const testimonialsData=testimonials?.testimonial
    const total=testimonials?.pagination?.total

    return (
    <>
        <ReviewSchema testimonials={testimonialsData} />
      <ClientStories total={total} testimonials={testimonialsData} />
    </>)
}

