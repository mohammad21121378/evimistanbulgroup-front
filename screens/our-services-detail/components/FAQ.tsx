import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import { RichContent } from "../types";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";

export interface FAQItem {
    Q: string;
    A: RichContent;
}

interface Props {
    title?: string;
    data: FAQItem[];
}

export default function FAQ({ title, data }: Props) {
    return (
        <ServiceCard className="text-lg">
            {title && (
                <TitleServiceCard>
                    {title}
                </TitleServiceCard>
            )}

            <div className="space-y-0">
                {data.map((faq, i) => (
                    <div
                        key={i}
                        className="py-4"
                    >
                        <p className="font-bold ">
                            Q: {faq.Q}
                        </p>

                        <div className="mt-2 ">
                            <strong className="">A:</strong>{" "}
                            {typeof faq.A === "string" ? (
                                faq.A
                            ) : (
                                <RichTextRenderer content={faq.A} className="mt-1" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </ServiceCard>
    );
}
