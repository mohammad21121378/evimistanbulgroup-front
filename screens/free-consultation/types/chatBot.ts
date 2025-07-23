import { ReactNode } from "react";

export type ChatbotInputProps = {
    placeholder?: string;
    iconRight?: ReactNode;
    initialOpen?: boolean
    setInitialOpen?: (val:boolean)=>void
}

