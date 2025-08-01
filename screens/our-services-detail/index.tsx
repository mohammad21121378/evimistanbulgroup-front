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
          <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-11 gap-16">
            <div className="space-y-16 md:col-span-8 xl:col-span-8">

              <RenderComponents mainSections={mainSections} components={components} />

            </div>

            <aside className="md:col-span-4 xl:col-span-3">

              <ServiceSidebar
                showConsultationBox={!!data.sidebar?.counseling}
                links={data.sidebar?.usefulLinks}
                showSearch={!!data.sidebar?.search}
                showMedicalImg={!!data.sidebar?.medicalImg}
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
