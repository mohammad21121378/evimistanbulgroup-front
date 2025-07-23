import { RefObject } from "react";
import { ChatMessageType } from "./chatMessage";

export type ChatSidebarProps = {
    isOpen: boolean;
    messages: ChatMessageType[];
    chatContent: React.RefObject<HTMLDivElement>;
}