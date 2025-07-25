import React from "react";
import classNames from "classnames";
import Link from "../ui/Link";

interface UsefulLinksProps {
  title?: string;
  links: { label: string; link: string }[];
  className?: string;
  inline?: boolean;
}

export default function UsefulLinksWithLabel({
  title = "Useful links",
  links,
  className = "",
  inline = false,
}: UsefulLinksProps) {
  return (
    <div className={classNames("p-6 bg-slate-100 rounded-lg", className)}>
      <div className="text-base font-medium mb-3">{title}</div>

      <div className={classNames({ "": inline, "flex flex-col gap-1": !inline })}>
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-extralight hover:text-orange-500 pr-1.5 transition-all duration-300 text-base underline"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
