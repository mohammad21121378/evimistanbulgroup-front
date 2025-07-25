import ReviewSchema from "@/components/review-schema/ReviewSchema";
import ClientStories from "@/screens/client-stories";
import Head from "next/head";
import fetchTestimonials from "@/helpers/api/testimonials/testimonials";

type Props = {
    params: { locale: string };
};
export default async function Page({params}: Props) {
    const { locale } = params;
    const testimonials = await fetchTestimonials(4, 0,locale);


    return (
    <>
      <Head>
        <ReviewSchema testimonials={testimonials?.testimonial} />
      </Head>
      <ClientStories total={testimonials?.pagination?.total} testimonials={testimonials?.testimonial} />
    </>)
}

