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
        medicalImg?: {}
      };
};

export type ComponentsType = typeof components

export interface NestedListItem {
    title: string;
    subItems?: string[];
    description?: string | RichContent;
  }
  
  export interface ListBlock {
    type: "list" | "olList";
    value: (string | NestedListItem)[];
    classNames?: string;
    subClassNames?: string;
    parentClassNames?: string;
  }