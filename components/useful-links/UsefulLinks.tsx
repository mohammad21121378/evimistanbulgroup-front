import React from "react";
import classNames from "classnames";
import Link from "../ui/Link";

interface UsefulLinksProps {
  title?: string;
  text?: string;
  links?: string[];
  className?: string;
  inline?: boolean;
}

export default function UsefulLinks({
  title = "Useful links",
  links,
  text,
  className = "",
  inline = false,
}: UsefulLinksProps) {
  return (
    <div className={classNames("p-6 bg-slate-100 rounded-lg", className)}>
      <div className="text-base font-medium mb-3">{title}</div>

        {links && <div className={classNames({ "": inline, "flex flex-col gap-1": !inline })}>
        {links.map((item, index) => (
          <Link
            key={index}
            href={item}
            className="font-extralight hover:text-orange-500 pr-1.5 transition-all duration-300 text-base underline"
          >
            {item}
          </Link>
        ))}
      </div>}
        {text && <div className="font-extralight  pr-1.5 transition-all duration-300 text-base"
                      dangerouslySetInnerHTML={{__html:text}}></div>}
    </div>
  );
}
