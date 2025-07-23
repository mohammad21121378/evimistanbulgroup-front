import { RefObject } from "react";
import { ChatMessageType } from "./chatMessage";

export interface chatbotHook {
    staticRef: RefObject<HTMLDivElement>;
    chatContent: RefObject<HTMLDivElement>;
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    messages: ChatMessageType[];
    handleSend: () => Promise<void>;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    inView: boolean;
    initialWidth: number;
  }