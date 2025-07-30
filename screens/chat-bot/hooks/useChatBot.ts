import { useRef, useState } from "react"
import { defaulMessage } from "../constants";
import { ChatItem } from "@/types/Chat";
import { useConsultationStore } from "@/stores/consultationStore";
import { PropertyRawType } from "@/types/Property";
import {useLocale} from "next-intl";
import {sendAIMessage} from "@/helpers/api/sendAIMessage"

export function useChatBot() {
    const locale = useLocale();
    const { onOpen } = useConsultationStore()


    const messagesRef = useRef<HTMLDivElement | null>(null)

    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<ChatItem[]>(defaulMessage as ChatItem[])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false);
    const [activelimitation, setActivelimitation] = useState(false);
    const [activeCleanButton, setActiveCleanButton] = useState(false);
    const [activeConsultation, setActiveConsultation] = useState(false);


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
        onOpen()
    }

    const sendMessage = async () => {
        if (!input.trim() || isTyping || activelimitation) return;

        const userMessage: ChatItem = { role: 'user', content: input };
        setIsTyping(true);
        setMessages(prev => [...prev, userMessage]);
        setMessages(prev => [...prev, { role: 'assistant', content: '...' }]);
        setInput('');
        scrollToBottom();

        const updatedMessages = [...messages, userMessage];
        const botResponseData = await sendAIMessage(updatedMessages,locale);
        const botResponse = botResponseData.text ?? '' ;
        const includesProperty = botResponseData.property && botResponseData.property.length > 0;

        const dummyProperties: PropertyRawType[] = includesProperty ? botResponseData.property : [];


        scrollToBottom();

            setMessages(prev => prev.slice(0, -1));
            if (!activeCleanButton) setActiveCleanButton(true)

            let i = 0;
            let currentText = '';

            const interval = setInterval(() => {
                currentText += botResponse[i++];

                updateBotMessage(currentText);
            
                scrollToBottom();
            
                if (i >= botResponse.length) {
                    clearInterval(interval);
                    setIsTyping(false);
            
                    const botMessagesCount = messages.filter(msg => msg.role === 'assistant').length;
                    if (botMessagesCount >= 3) setActiveConsultation(true);
            
                    
                    if (includesProperty) {
                        updateBotMessage(currentText, dummyProperties);
                    }
                    
                    scrollToBottom();
                }
            }, 15);
    };

    const scrollToBottom = () => {
        requestAnimationFrame(() => {
            messagesRef.current?.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: 'smooth',
            });
        });
    };

    const updateBotMessage = (
        text: string,
        properties?: PropertyRawType[]
    ) => {
        setMessages(prev => {
            const last = prev[prev.length - 1];
            const newMessage: ChatItem = { role: 'assistant', content: text };
            if (properties) newMessage.properties = properties;
    
            return last?.role === 'assistant'
                ? [...prev.slice(0, -1), newMessage]
                : [...prev, newMessage];
        });
    };

    const onClean = () => {
        if(isTyping) return;
        setMessages(defaulMessage as ChatItem[]);
        setInput('');
        setIsTyping(false);
        setActivelimitation(false);
        setActiveConsultation(false);
        setActiveCleanButton(false);
        
        requestAnimationFrame(() => {
            messagesRef.current?.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: 'smooth',
            });
        });
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
        onOpenConsultation,
        activeCleanButton,
        onClean,
        activeConsultation
    }

}