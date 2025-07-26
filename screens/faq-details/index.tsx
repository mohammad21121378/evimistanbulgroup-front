'use client'

import Layout from "@/components/Layout";
import ServiceSidebar from "@/components/our-services/service-sidebar";

import { DataType } from "./types";
import SectionTopWithColor from "@/components/section-top-with-color";
import Alert from "./components/Alert";
import ListContent from "./components/ListContent";

type Props = {
  data: DataType
};

export default function FaqDetails({ data }: Props) {
  return (
    <Layout>

      {
        data.title &&
        <SectionTopWithColor
          bg="bg-[#002DD1]"
          breadcrumb={[{ label: 'Frequently Asked Questions', href: '/faqs' }, { label: data.title }]}
          title={`${data.title} | FAQs`} />
      }


      <section className="section !pb-0">
        <div className="container">
          <Alert />
          <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-11 gap-16 mt-16">

            <div className="space-y-16 md:col-span-8 xl:col-span-8">


              <ListContent list={data.list} />

            </div>

            <aside className="md:col-span-4 xl:col-span-3">

              <ServiceSidebar
                showConsultationBox={!!data.sidebar?.counseling}
                links={data.sidebar?.guideLinks}
                servicesLinks={data.sidebar?.servicesLinks}
                showSearch={!!data.sidebar?.search}
                showMedicalImg={!!data.sidebar?.medicalImg}
              />

            </aside>
          </div>
        </div>
      </section>

    </Layout>
  );
}
