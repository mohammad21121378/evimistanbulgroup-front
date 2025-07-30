import { useRef, useState } from "react"
import { defaulMessage } from "../constants";
import { ChatItem } from "@/types/Chat";
import { useConsultationStore } from "@/stores/consultationStore";
import { PropertyRawType } from "@/types/Property";
import {useLocale} from "next-intl";
import {sendAIMessage} from "@/helpers/api/sendAIMessage"
const generateDummyProperties = (count: number): PropertyRawType[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `Sample Property ${i + 1}`,
        slug: `sample-property-${i + 1}`,
        url: `/properties/sample-property-${i + 1}`,
        content: null,
        description: `A great property located in Istanbul A great property located in Istanbul A great property located in Istanbul #${i + 1}.`,
        created_at: new Date().toISOString(),
        images: [`/images/properties/commercial/downtown-office.webp`, `Sample Image ${i + 1}`],
        location: 'Istanbul',
        locationID: 1,
        parentLocation: 'Turkey',
        parentLocationID: 0,
        types: [{ id: 1, title: 'Apartment' }],
        special_features: [{ id: 1, title: 'Sea View' }],
        category: 'Residential',
        status: "available",
        min_price: 100000 + i * 10000,
        max_price: 150000 + i * 10000,
        latitude: 41.0082,
        longitude: 28.9784,
        features: [
            { id: 1, icon: 'bed', name: 'Bedrooms', value: 2 },
            { id: 2, icon: 'bath', name: 'Bathrooms', value: 1 },
        ],
        agent: {
            image: '/images/agent.jpg',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+905551112233',
        },
        key_features_and_highlights: null,
        investment_and_payment: null,
        amenities_and_services: null,
        property_description: null,
        location_and_lifestyle: null,
        legal_and_citizenship: null,
        virtual_tour_video: null,
        floor_plans_and_gallery: null,
        contact_and_request_info: null,
        meta_description: null,
        meta_title: null,
        meta_index: "index",
        meta_follow: "follow",
    }));
};


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