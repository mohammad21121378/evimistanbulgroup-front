import { PropertyRawType } from "./Property";

export type ChatItem = {
    role: 'user' | 'assistant';
    content: string;
    properties?: PropertyRawType[];
    searchLink?: string;
};