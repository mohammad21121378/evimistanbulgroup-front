import { useRef, useState } from "react"
import { defaulMessage } from "../constants";
import { ChatItem } from "@/types/Chat";
import { useConsultationStore } from "@/stores/consultationStore";




export function useChatBot() {

    const { onOpen } = useConsultationStore()


    const messagesRef = useRef<HTMLDivElement | null>(null)

    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<ChatItem[]>(defaulMessage as ChatItem[])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false);
    const [activelimitation, setActivelimitation] = useState(false);


    const toggleChat = () => {
        if (!isOpen) {
            setTimeout(() => {
                messagesRef.current?.scrollTo({
                    top: messagesRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }, 650);
        }
        setIsOpen(!isOpen)
    }

    const onOpenConsultation = () => {
        toggleChat();
        onOpen()    }

    const sendMessage = async () => {
        if (!input.trim() || isTyping || activelimitation) return;


        const userMessage: ChatItem = { role: 'user', content: input };
        setIsTyping(true)
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        requestAnimationFrame(() => {
            messagesRef.current?.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: 'smooth',
            });
        });

        const loadingMessage: ChatItem = { role: 'assistant', content: '...' };
        setMessages(prev => [...prev, loadingMessage]);

        setTimeout(() => {
            const finalText = "Welcome to Ovim Istanbul! Whether you're buying, renting, or just browsing, I’m here to help. What are you looking for?";
            let currentText = '';
            setMessages(prev => prev.slice(0, -1));

            let i = 0;
            const typingInterval = setInterval(() => {
                currentText += finalText[i];
                i++;

                setMessages(prev => {
                    const lastBotMessage = prev[prev.length - 1];
                    if (lastBotMessage?.role === 'assistant') {
                        return [...prev.slice(0, -1), { role: 'assistant', content: currentText }];
                    } else {
                        return [...prev, { role: 'assistant', content: currentText }];
                    }
                });

                messagesRef.current?.scrollTo({
                    top: messagesRef.current.scrollHeight,
                    behavior: 'smooth',
                });

                if (i >= finalText.length) {
                    clearInterval(typingInterval);
                    setIsTyping(false);

                    const botMessagesCount = messages.filter(msg => msg.role === 'assistant').length;
                    if (botMessagesCount >= 3) {setActivelimitation(true)};

                    requestAnimationFrame(() => {
                        messagesRef.current?.scrollTo({
                            top: messagesRef.current.scrollHeight,
                            behavior: 'smooth',
                        });
                    });
                }

            }, 15);
        }, 1000);
    };


    return {
        isOpen,
        messages,
        input,
        toggleChat,
        sendMessage,
        setInput,
        messagesRef,
        isTyping,
        activelimitation,
        onOpenConsultation
    }

}