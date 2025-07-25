import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import RequestContact from "./components/RequestContact";
import OfferServices from "@/components/offer-services";

export default function ContactUs() {
    return (
        <Layout>
            <Hero />
            <RequestContact />
            <OfferServices />
        </Layout>
    )
}