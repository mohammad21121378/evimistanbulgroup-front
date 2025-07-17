import React from "react";
import classNames from "classnames";
import RichTextRenderer from "./RichTextRenderer";
import type { ListBlock, NestedListItem } from "../types";

type Props = {
  block: ListBlock;
};

export default function ListBlockRenderer({ block }: Props) {
  const ListWrapper = block.type === "olList" ? "ol" : "ul";

  return (
    <ListWrapper
      className={classNames(
        "list-inside space-y-1.5 pl-2 text-lg",
        block.type === "olList"
          ? "list-decimal "
          : "list-disc",
        block.classNames
      )}
    >
      {block.value.map((item, idx) => {

        if (typeof item === "string") {
          return <li key={idx}>{item}</li>;
        }

        const { title, subItems, description } = item as NestedListItem;

        return (
          <li key={idx} className="space-y-1">
                
              <span className={classNames("font-bold", block.parentClassNames)}>
                {title}
              </span>

              {description && (
                <div className="mt-1">
                  {typeof description === "string" ? (
                    <RichTextRenderer content={[{type: "normal", value: description}]} />
                  ) : (
                    <RichTextRenderer content={description} />
                  )}
                </div>
              )}

            <ul
              className={classNames(
                "list-disc list-inside space-y-0.5 pl-7 pb-7",
                block.subClassNames
              )}
            >
              {subItems?.map((sub, subIdx) => (
                <li key={subIdx}>{sub}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ListWrapper>
  );
}
