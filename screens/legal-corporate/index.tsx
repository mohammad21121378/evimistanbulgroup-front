import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import OfferServices from "./components/OfferServices";
import Content from "./components/Content";

export default function LegalCorporate() {
    return (
        <Layout>
            <Hero />
            <Content />
            <OfferServices />
        </Layout>
    )
}