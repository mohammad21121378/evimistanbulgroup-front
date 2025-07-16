// import React from "react";
// import RichTextRenderer from "./RichTextRenderer";
// import { RichContent } from "../types";
// import ServiceCard from "@/components/our-services/service-card";
// import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";

// export interface FAQItem {
//     Q: string;
//     A: RichContent;
// }

// interface Props {
//     title?: string;
//     data: FAQItem[];
// }

// export default function FAQ({ title, data }: Props) {
//     return (
//         <ServiceCard className="text-lg">
//             {title && (
//                 <TitleServiceCard>
//                     {title}
//                 </TitleServiceCard>
//             )}

//             <div className="space-y-0">
//                 {data.map((faq, i) => (
// <div
//     key={i}
//     className="py-4"
// >
//     <p className="font-bold ">
//         Q: {faq.Q}
//     </p>

//     <div className="mt-2 ">
//         <strong className="">A:</strong>{" "}
//         {typeof faq.A === "string" ? (
//             faq.A
//         ) : (
//             <RichTextRenderer content={faq.A} className="mt-1" />
//         )}
//     </div>
// </div>
//                 ))}
//             </div>
//         </ServiceCard>
//     );
// }


import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import ServiceCard from "@/components/our-services/service-card";
import TitleServiceCard from "@/components/our-services/service-card/TitleServiceCard";
import classNames from "classnames";
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

export default function FAQ({ title, data }: Props) {
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

                        {/* {entry.list && (
                            <ul className={classNames("list-disc list-inside space-y-1.5 pl-1 mt-4", entry.list.classNames)}>
                                {entry.list.value.map((item, idx) => {
                                    if (typeof item === "string") {
                                        return <li key={idx}>{item}</li>;
                                    }

                                    return (
                                        <li key={idx}>
                                            <span className={classNames('font-bold', entry.list?.parentClassNames)}>{item.title}</span>
                                            <ul className={classNames("list-disc list-inside space-y-0.5 pl-4", entry.list?.subClassNames)}>
                                                {item.subItems.map((sub, subIdx) => (
                                                    <li key={subIdx}>{sub}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        )} */}

                        {entry.list && <ListBlockRenderer block={{ ...entry.list, type: "list" }} />}
                        {entry.olList && <ListBlockRenderer block={{ ...entry.olList, type: "olList" }} />}
                        
                    </div>
                ))}
            </div>
        </ServiceCard>
    );
}