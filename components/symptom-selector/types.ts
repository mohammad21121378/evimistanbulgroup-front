import React, { ReactNode } from "react";

export interface SymptomItem {
    id: number | string;
    name: string;
}

export interface Symptom extends SymptomItem {
    count?: number;
    children?: SymptomItem[];
};

export type SymptomSelectorProps = {
    symptoms: Symptom[];
    search?: boolean;
    multiple?: boolean;
    title?: string;
    setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
    selected?: number[] | string[] | false;
    defaultIsOpen?: boolean;
    placeholder?: string;
    allowForSelectAllChildren?: boolean;
    parentIsLabel?: boolean;
    svgtitle?: ReactNode
};

export interface SymptomSelectorItemProps {
    symptom: Symptom;
    selectedSymptoms: string[] | false;
    handleSelect: (symptom: Symptom, parentId?: string) => void;
    parentId?: string 
    itemIsAll?: boolean ,
    isLabel?: boolean
};