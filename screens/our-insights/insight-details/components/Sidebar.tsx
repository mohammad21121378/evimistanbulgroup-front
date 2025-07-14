"use client";

import classNames from "classnames";
import { slugifyHeading } from "../utils/slugify";
import { useScrollHighlight } from "../hooks/useScrollHighlight";
import { Article } from "@/types/Article";
import TableOfContents from "@/components/table-of-contents";

interface Props {
    article: Article;
}

export default function ArticleSidebar({
    article,
}: Props) {

    return (
        <div className="md:col-span-3 col-span-1 overflow-visible relative md:pt-10">
            <div className="sticky top-20 ">
                {/* {article.table_of_content ? article.table_of_content.length > 0 && (
                    <div className="hidden md:block mb-4 sticky top-4">
                        <h2 className="font-bold text-lg text-gray-600">Table Of Content</h2>
                        <div className="steps-article mt-4 sticky top-4">

                            {article.table_of_content.map((item) => {

                                const id =
                                    slugifyHeading(item.heading)

                                console.log(id, activeSection, id === activeSection);

                                return (
                                    <div
                                        key={item.heading}
                                        className={classNames("step-article", {
                                            "step-article-active": id === activeSection,
                                        })}
                                    >
                                        <div className="step-article-tail" />
                                        <div className="step-article-icon-container">
                                            <div></div>
                                        </div>
                                        <div className="step-article-icon-content">
                                            <a
                                                href={`#${id}`}
                                                className={classNames("css-1r0daj6", {
                                                    "step-article-active active-link": id === activeSection,
                                                })}
                                                onClick={(e) => {
                                                    // e.preventDefault();
                                                    scrollToSection(item.heading);
                                                }}
                                            >
                                                <div className="css-19memkk">{item.placeholder}</div>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : ''} */}

                <div className="md:block hidden">
                    <TableOfContents hasActiveIcon={false} transparent />
                </div>

            </div>
        </div>
    );
}
