export interface ChatMessageType {
    id: number;
    text: string;
    user_id: number;
    sender: "user" | "bot";
    role: string;
    time: string;
  }