import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";
import Table from "@/components/table";
import { AfterTextBlock, RichTextBlock } from "../types";
import ListBlockRenderer from "./ListBlockRenderer";
import Paragraph from "./Paragraph";

interface TitleBlock {
    type: "title";
    value: string;
    options?: string[]
}

interface Paragraph {
    type: "paragraph";
    value: string;
}


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
    | Paragraph
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
                    case "olList":
                        return <ListBlockRenderer key={i} block={block} />;
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
                    case "paragraph":
                        return <div><Paragraph key={i} data={block} /></div>;
                    default:
                        return null;
                }
            })}
        </ServiceCard>
    );

}