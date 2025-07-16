import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";
import classNames from "classnames";
import Table from "@/components/table";
import { AfterTextBlock, RichTextBlock } from "../types";

interface TitleBlock {
    type: "title";
    value: string;
    options?: string[]
}


interface ListBlock {
    type: "list" | "olList";
    value: string[];
    classNames?: string; 
}

interface TableBlock {
    type: "table";
    value: {
        columns: string[];
        rows: string[][];
    };
}



export type ContentBlock =
    | TitleBlock
    | RichTextBlock
    | ListBlock
    | TableBlock
    | AfterTextBlock;

interface Props {
    data: ContentBlock[];
}

export default function Content({ data }: Props) {
    return (
        <ServiceCard className="text-gray-700">
            {data.map((block, i) => {
                switch (block.type) {
                    case "title":
                        return (
                            <TitleServiceCard options={block.options}>
                                {block.value}
                            </TitleServiceCard>
                        );
                    case "list":
                        return (
                            <ul key={i} className={classNames("list-disc list-inside space-y-1.5 pl-1", block.classNames )}>
                                {block.value.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        );
                    case "olList":
                        return (
                            <ol key={i} className="list-decimal list-inside space-y-1 pl-1.5 font-normal">
                                {block.value.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        );
                    case "table":
                        return (
                            <div className="pt-6">
                            <Table columns={block.value.columns} rows={block.value.rows} />
                            </div>
                        );
                    case "afterText":
                        return <RichTextRenderer className="!mt-4" key={i} content={block.value} />;
                    case "richText":
                        return <RichTextRenderer key={i} content={block.value} />;
                    default:
                        return null;
                }
            })}
        </ServiceCard>
    );

}