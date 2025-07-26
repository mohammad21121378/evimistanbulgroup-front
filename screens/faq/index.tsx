import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import OfferServices from "./components/OfferServices";
import Des from "./components/Des";

export default function Faq() {
    return (
        <Layout>
            <Hero />
            <ServicesSection />
            <Des />
            <OfferServices />
        </Layout>
    )
}