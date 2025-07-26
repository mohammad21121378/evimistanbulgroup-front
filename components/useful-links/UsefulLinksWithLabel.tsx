import React from "react";
import classNames from "classnames";
import Link from "../ui/Link";

interface UsefulLinksProps {
  title?: string;
  links: { label: string; link: string }[];
  className?: string;
  childClassName?: string;
  linkClassName?: string;
  inline?: boolean;
  truncate?: boolean;
}

export default function UsefulLinksWithLabel({
  title = "Useful links",
  links,
  className = "",
  childClassName = "",
  linkClassName = "",
  inline = false,
  truncate=false
}: UsefulLinksProps) {
  return (
    <div className={classNames("p-6 pr-2.5 bg-slate-100 rounded-lg", className)}>
      <div className="text-base font-bold mb-3">{title}</div>

      <ul className={classNames({ "": inline, "flex flex-col gap-1": !inline }, childClassName, "font-extralight")}>
        {links.map((item, index) => (
          <li key={index} className={classNames({"truncate": truncate})}>
          <Link
            key={index}
            href={item.link}
            className={classNames("hover:text-orange-500 pr-1.5 transition-all duration-300 xl:text-base text-sm underline", {"truncate": truncate}, linkClassName)}
          >
            {item.label}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
