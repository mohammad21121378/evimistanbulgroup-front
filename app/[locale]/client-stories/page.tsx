import ReviewSchema from "@/components/review-schema/ReviewSchema";
import ClientStories from "@/screens/client-stories";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <ReviewSchema />
      </Head>
      <ClientStories />
    </>)
}

