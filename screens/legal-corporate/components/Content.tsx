"use client";

import { Heading } from "@/components/typography";
import Link from "@/components/ui/Link";
import SectionCard from "@/components/ui/SectionCard";

export default function Content() {

    return (
        <div className="container mt-6">
            <section className="section !pb-6 !mb-0 space-y-10">

                <SectionCard>
                    <Heading type="heading-5">
                        Legal Executive Partner
                    </Heading>

                    <ul className="list-disc list-inside mt-8 text-xl">
                        <li><strong>Company Name: </strong> EVİMİSTANBUL İNŞAAT LİMİTED ŞİRKETİ</li>
                        <li><strong>Headquarters: </strong> İstanbul, Türkiye</li>
                        <li><strong>Founder & CEO: </strong> MEISAM KHERADMAND (2024 - NOW)</li>
                        <li><strong>MERSIS Number: </strong> 0382-0497-0590-0001</li>
                        <li><strong>Trade Registry No: </strong> 1049016</li>
                    </ul>

                    <p className="italic text-xl underline mt-8">
                        This company is the sole legal entity responsible for client contracts, financial transactions, and operational activities related to the EvimIstanbul Group.
                    </p>
                </SectionCard>


                <SectionCard>
                    <Heading type="heading-5" >
                        Technology Partner
                    </Heading>

                    <ul className="list-disc list-inside mt-8 text-xl">
                        <li><strong> Company Name: </strong> Abbaszadeh Teknoloji Ticaret İthalat İhracat Limited Şirketi</li>
                        <li><strong> Headquarters: </strong> İstanbul, Türkiye</li>
                        <li><strong> Founder & CEO: </strong>Reza Abbaszadeh (2020 - NOW)</li>
                        <li><strong> MERSIS Number: </strong> 0001-2097-1140-0001</li>
                        <li><strong> D-U-N-S Number: </strong> 751142309</li>
                    </ul>

                    <p className="text-xl mt-8">
                        This company powers the digital infrastructure, AI technologies, and internal systems behind EvimIstanbul Group, and It is not legally responsible for any operational transactions, contractual obligations, or legal disputes related to client services.
                    </p>

                    <Heading type="heading-5" className="mt-12">
                        Our Certifications & Commitment to Excellence
                    </Heading>

                    <p className="text-xl mt-8">
                        At EvimIstanbul Group, powered by Abbaszadeh Teknoloji, we take pride in holding internationally recognized certifications that reflect our unwavering commitment to quality, data security, and client satisfaction. We are proudly certified with:
                    </p>

                    <ul className="list-disc list-inside mt-8 text-xl">
                        <li><strong> ISO/IEC 27001:2022 </strong> – Ensuring the highest standards in information security and data protection across all digital operations.</li>
                        <li><strong> TS ISO/IEC 15504 SPICE </strong> – Recognizing our organizational maturity and excellence in software process development and AI system management.</li>
                        <li><strong> TS ISO 10002:2018 </strong> – Demonstrating our dedication to superior customer satisfaction and continuous improvement through structured feedback systems.</li>
                    </ul>

                    <p className="text-xl mt-8">
                        These certifications are not just badges—they are the backbone of the trust, security, and performance we offer in every project. Whether it's property investment, medical tourism, or AI-powered platforms, we operate under globally trusted standards.
                    </p>

<div className="grid sm:grid-cols-3 grid-cols-1 lg:px-10 lg:gap-10 px-5 gap-5 mt-12">
    <img src="/images/documents/spice-certificate.webp" alt="ISO/IEC 27001:2022" className="h-full object-cover rounded-xl shadow" />
    <img src="/images/documents/iso27001-certificate.webp" alt="TS ISO/IEC 15504 SPICE" className="h-full object-cover rounded-xl shadow" />
    <img src="/images/documents/iso10002-certificate.webp" alt="TS ISO 10002:2018" className="h-full object-cover rounded-xl shadow" />
</div>
                </SectionCard>

                <SectionCard>
                    <Heading type="heading-5" >
                        Trademark Details
                    </Heading>

                    <ul className="list-disc list-inside mt-8 text-xl">
                        <li>
                            <strong>Brand Name: </strong>
                            evimIstanbul Group™
                        </li>
                        <li>
                            <strong>Registered By: </strong>
                            Abbaszadeh Teknoloji Ticaret İthalat İhracat Limited Şirketi
                        </li>
                    </ul>

                    <p className="italic text-xl underline mt-8">
                        EvimIstanbul Group™ is a registered tech trademark. All rights reserved. Unauthorized use or reproduction is strictly prohibited under applicable intellectual property laws.
                    </p>

                </SectionCard>

                <SectionCard>
                    <Heading type="heading-5" >
                        Legal Notice
                    </Heading>

                    <ul className="list-disc list-inside mt-8 text-xl">
                        <li>
                            By accessing or using this website, you acknowledge that you have read, understood, and agreed to be bound by our  <Link href="/terms-conditions" className="underline hover:text-orange-600 font-bold"> Terms & Conditions </Link> and our <Link href="privacy-policy" className="underline hover:text-orange-600 font-bold"> Polices</Link>.
                        </li>
                    </ul>

                    <p className="italic text-xl underline mt-8">
                        All users are legally bound by these terms. If you do not agree, you must refrain from using the site or any of its services, or any affiliated social media platforms.
                    </p>

                </SectionCard>

            </section>


        </div>
    );
}
