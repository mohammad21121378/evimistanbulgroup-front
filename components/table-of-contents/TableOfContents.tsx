"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { ArrowRight } from "@/constants/icons";
import { Heading } from "../typography";
import { tocIconMap } from "./tocIcons";

type TocItem = {
  id: string;
  text: string;
};

type TableOfContentsProps = {
  className?: string;
  transparent?: boolean;
  hasActiveIcon?: boolean;
  hasCustomizeIcon?: boolean
};

export default function TableOfContents({ className, transparent=false, hasActiveIcon=true, hasCustomizeIcon=false }: TableOfContentsProps) {

  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2")) as HTMLHeadingElement[];

    const items = headings.map((heading, index) => {
      if (!heading.id) {
        heading.id = `section-${index}`;
      }

      heading.classList.add("scroll-mt-[110px]");

      return {
        id: heading.id,
        text: heading.textContent || `Section ${index + 1}`,
      };
    });

    setItems(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: "-60px 0px -80% 0px",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className={classNames(
        "p-6 sticky top-10 w-full h-fit",
        {"bg-slate-100 outline outline-1 outline-transparent rounded-lg": !transparent},
        className
      )}
    >
      <strong className="text-xl font-bold mb-2.5 block">Table of Contents</strong>
      <ul className="space-y-2 text-base">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={classNames(
                  "flex items-center gap-0 transition",
                  {
                    "text-blue-600 font-bold": isActive,
                    "text-gray-700 hover:text-blue-600 font-normal": !isActive,
                  }
                )}
              >
                <div className="min-w-7 max-w-7">{hasActiveIcon && isActive && <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short w-7" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>}</div>
                {hasCustomizeIcon && <div className="mr-1.5"> { tocIconMap[item.text] } </div> }
                <span className="truncate">{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
