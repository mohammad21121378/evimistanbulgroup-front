import Layout from "@/components/Layout";
import Hero from "./hero";
import Services from "./services";
import ServiceLayout from "@/components/our-services/ServiceLayout";
import ServiceSidebar from "@/components/our-services/service-sidebar";
import WhyUs from "./why-us/WhyUs";
import OfferServices from "./offer-services";

export default function OurServices() {
  return (
    <Layout>
      <Hero />
      <ServiceLayout
        mainContent={<Services />}
        sidebarContent={<ServiceSidebar showLinks={false} />}
      />
      <WhyUs />

      <OfferServices />
    </Layout>
  );
}
