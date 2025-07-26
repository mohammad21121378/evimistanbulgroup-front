"use client";

import SectionTopWithColor from "@/components/section-top-with-color";
import { Heading } from "@/components/typography";
import SectionCard from "@/components/ui/SectionCard";
import { useConsultationStore } from "@/stores/consultationStore";
import classNames from "classnames";

export default function Hero() {

  const {onOpen} = useConsultationStore()

  const paragraphClasses = "italic text-xl leading-snug mb-5";

  return (
    <>
      <SectionTopWithColor
        bg="bg-[#002DD1]"
        breadcrumb={[{ label: 'Frequently Asked Questions (FAQs)' }]}
        title="Frequently Asked Questions (FAQs)" />




      <div className="container mt-6">
        <section className="section !pb-6 !mb-0">

          <SectionCard>
            <Heading type="heading-5">
              Frequently Asked Questions about Moving, Living, Citizenship and Investing in Turkey | 2025 Edition
            </Heading>

            <p className={classNames(paragraphClasses, "mt-6")}>
              Moving to Turkey involves many considerations – from legal residency and visas to buying property, healthcare, and starting a business or becoming a citizen of Turkey.  Below is a comprehensive list of  questions asked by many people covering legal, financial, and lifestyle topics that are essential for foreigners interested in life and investment in Turkey. These questions address common concerns about visas, permits, real estate, citizenship, healthcare, family relocation, and more, ensuring you get detailed insights into each area.
            </p>

            <Heading type="heading-5" className="mt-8">
              Please Note:
            </Heading>

            <p className={classNames(paragraphClasses, "mt-6")}>
              The information below is provided for educational and informational purposes only. While we do our best to keep it up-to-date, laws, procedures, and requirements in Turkey are constantly evolving. Every case is unique — your situation may differ due to nationality, personal background, or recent legal changes.
            </p>
            <p className={classNames(paragraphClasses)}>
              hat’s why we always recommend speaking with the expert advisors first.

            </p>
            <p className={classNames(paragraphClasses)}>
              Contact us for a <span className="text-orange-500 hover:text-orange-700 duration-300 transition-all  underline font-bold px-0.5 cursor-pointer" onClick={onOpen}>FREE Consultation</span> and receive personalized guidance based on your specific needs.
           </p>
                        </SectionCard>

        </section>


      </div>

    </>
  );
}
