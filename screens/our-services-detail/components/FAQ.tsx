import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";
import { RichContent } from "../types";
import ListBlockRenderer from "./ListBlockRenderer";

interface ListBlock {
    type: "list" | "olList";
    value: (
        | string
        | {
            title: string;
            subItems: string[];
        }
    )[];
    classNames?: string;
    subClassNames?: string;
    parentClassNames?: string
}


interface FAQEntry {
    Q?: string;
    A?: string;
    richText?: RichContent;
    list?: ListBlock;
    olList?: ListBlock;
}

interface Props {
    title?: string;
    data: FAQEntry[];
}

export default function FAQ({ title="FAQ Highlights", data }: Props) {
    return (
        <ServiceCard className="text-gray-700 text-lg">
            {title && <TitleServiceCard>{title}</TitleServiceCard>}

            <div className="space-y-8">
                {data.map((entry, i) => (
                    <div key={i}>

                        {entry.Q &&
                            <p className="font-bold ">
                                Q: {entry.Q}
                            </p>
                        }

                        {
                            entry.A &&
                            <div className="mt-2 ">
                                <strong className="">A: </strong>
                                {entry.A}
                            </div>
                        }


                        {entry.richText && (
                            <div className="mt-4">
                                <RichTextRenderer content={entry.richText} />
                            </div>
                        )}
                        
                        {entry.list && <ListBlockRenderer block={{ ...entry.list, type: "list" }} />}
                        {entry.olList && <ListBlockRenderer block={{ ...entry.olList, type: "olList" }} />}
                        
                    </div>
                ))}
            </div>
        </ServiceCard>
    );
}