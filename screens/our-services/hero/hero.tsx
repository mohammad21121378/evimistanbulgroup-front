import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import ContentTopPage from "@/components/content-top-page";


export default function Hero() {

  const BreadcrumbItems = [
    {
      label: 'Our Services'
    }
  ]

  return (
    <div className="container mt-36">
      <Breadcrumb items={BreadcrumbItems} />
      <ContentTopPage
        title="Our Services"
        subTitle="Your Trusted Gateway to Life, Investment, and Opportunity in Turkey"
        description="At EvimIstanbul Group, we offer a full spectrum of end-to-end services designed for international investors, families, students, and professionals seeking to build a future in Turkey. Whether you're here to buy property, gain Turkish citizenship, start a business, pursue healthcare, or simply explore life in a new country — we ensure your experience is safe, legal, and seamless.
      Every service is backed by multilingual experts, legal advisors, and local professionals — all under one trusted platform."
      />
    </div>
  );
}
