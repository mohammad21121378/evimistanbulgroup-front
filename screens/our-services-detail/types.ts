import { components } from "./components";

export interface TextBlock {
    type: "text" | "bold";
    value: string;
    color?: string;
    classes?: string;
}

export interface NewlineBlock {
    type: "newline";
}

export interface RichTextBlock {
    type: "richText";
    value: (TextBlock | NewlineBlock)[] | string;
}

export type RichContent = (TextBlock | NewlineBlock)[] | string;

export interface AfterTextBlock {
    type: "afterText";
    value: (TextBlock | NewlineBlock)[];
}

export type DataType = {
    sections: any[];
    sidebar?: {
        usefulLinks?: {};
        counseling?: {};
        search?: {};
      };
};

export type ComponentsType = typeof components