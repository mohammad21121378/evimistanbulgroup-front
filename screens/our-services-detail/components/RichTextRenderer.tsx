import classNames from "classnames";
import React from "react";

interface TextBlock {
  type: "text" | "bold" | 'normal';
  value: string;
  color?: string;
  classes?: string;
}

interface NewlineBlock {
  type: "newline";
}

type RichContent = (TextBlock | NewlineBlock)[] | string;

interface Props {
  content: RichContent;
  className?: string;
}

export default function RichTextRenderer({ content, className }: Props) {
  if (typeof content === "string") {
    return <p className={classNames(className, ' leading-relaxed text-lg')}>{content}</p>;
  }

  let currentLine: React.ReactNode[] = [];
  const lines: React.ReactNode[][] = [];

  content.forEach((item, i) => {

    if (item.type === "newline") {
      lines.push([...currentLine]);
      currentLine = [];
      return;
    }

    if (item.type === "text" || item.type === "bold" || item.type === "normal") {
      const Comp = item.type === "bold" ? "strong" : "span";
      currentLine.push(
        <Comp
          key={i}
          className={classNames(item.classes, 'pr-1 text-lg', {"font-normal": item.type === "normal"})}
          style={{ color: item.color || undefined }}
        >
          {item.value}
        </Comp>
      );
    }
  });

  if (currentLine.length) lines.push(currentLine);

  return (
    <div className={classNames(className, "space-y-0.5 leading-relaxed text-lg")}>
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
}
