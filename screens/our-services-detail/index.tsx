'use client'

import Layout from "@/components/Layout";
import ServiceSidebar from "@/components/our-services/service-sidebar";

import { DataType } from "./types";
import { useComponentExtraction } from "./hooks/useComponentExtraction";
import RenderComponents from "./components/RenderComponents";
import Properties from "./properties";
import Insights from "./insights";

type Props = {
  data: DataType
};

export default function OurServicesDetails({ data }: Props) {

  const {
    introductionSection,
    usHelpSection,
    mainSections,
    marqueeSection,
    components
  } = useComponentExtraction({ data })

  return (
    <Layout>

      {introductionSection && (
        <components.introduction key="intro" data={introductionSection.data} />
      )}
      {marqueeSection && (
        <components.marquee key="marquee" data={marqueeSection.data} />
      )}

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-16">
            <div className="space-y-16">

              <RenderComponents mainSections={mainSections} components={components} />

            </div>

            <aside className="">

              <ServiceSidebar
                showConsultationBox={!!data.sidebar?.counseling}
                showLinks={!!data.sidebar?.usefulLinks}
                showSearch={!!data.sidebar?.search}
              />

            </aside>
          </div>
        </div>
      </section>

      {usHelpSection && (
        <components.usHelp key="us-help" data={usHelpSection.data} />
      )}

      <Properties />

      <Insights />
      
    </Layout>
  );
}
