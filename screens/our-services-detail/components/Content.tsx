import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";
import Table from "@/components/table";
import { AfterTextBlock, RichTextBlock } from "../types";
import ListBlockRenderer from "./ListBlockRenderer";
import Paragraph from "./Paragraph";
import Link from "@/components/ui/Link";
import { ArrowRight2 } from "@/constants/icons";

interface TitleBlock {
    type: "title";
    value: string;
    options?: string[]
}

interface LinkType {
    type: "link";
    value: {
        title: string;
        link: string;
        isExternal?: boolean;

    };
    options?: string[]
}

interface ParagraphType {
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
    | ParagraphType
    | AfterTextBlock
    | LinkType
    ;

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
                    // case "link":
                    //     return <Link href={block.value.link} isExternal={block.value.isExternal} className="text-orange-500 hover:text-orange-600 text-lg font-bold flex items-center gap-2 w-fit">{block.value.title} {ArrowRight2}</Link>;
                    case "link": {
                        const isPrevLink = data[i - 1]?.type === "link";
                        return (
                            <Link
                                key={i}
                                href={block.value.link}
                                isExternal={block.value.isExternal}
                                className={`text-orange-500 hover:text-orange-600 text-lg font-bold flex items-center gap-2 w-fit ${isPrevLink ? "!mt-1" : ""}`}
                            >
                                {block.value.title} {ArrowRight2}
                            </Link>
                        );
                    }
                    default:
                        return null;
                }
            })}
        </ServiceCard>
    );

}