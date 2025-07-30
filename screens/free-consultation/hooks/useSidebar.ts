import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import isEqual from 'lodash.isequal';

export function useSidebar(initialOpen?: boolean, setInitialOpen?: (val:boolean)=>void) {
  const staticRef = useRef<HTMLDivElement>(null);
  const chatContent = useRef<HTMLDivElement>(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const isVisible = useInView(staticRef, { margin: '-2px 0px 0px 0px' });
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (initialOpen !== undefined) {
      setSidebarOpen(initialOpen)
    }
  }, [initialOpen]);

  useEffect(() => {
    if (setInitialOpen && !isEqual(initialOpen, sidebarOpen)) {
      setInitialOpen(sidebarOpen)
    }
  }, [sidebarOpen]);
  
  useEffect(() => {
    if (staticRef.current) {
      setInitialWidth(staticRef.current.offsetWidth);
    }
    setInView(sidebarOpen ? false : isVisible);
  }, [isVisible, sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen) setInView(false);
  }, [sidebarOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (chatContent.current) {
        chatContent.current.scrollTo({
          top: chatContent.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 0);
  }, [sidebarOpen, messages]);

  const handleSend = async () => {
    if (!query.trim() || botIsTyping) return;

    const newMessage = {
      id: messages.length + 1,
      text: query,
      user_id: 1,
      role: 'user',
      role: 'assistant',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    };

    setMessages(prev => [...prev, newMessage]);
    setSidebarOpen(true);
    setBotIsTyping(true);

    // await sendAImessage(query, [...messages, newMessage], setMessages, setQuery, setBotIsTyping);
  };

  const onKeyDown: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return {
    staticRef,
    chatContent,
    sidebarOpen,
    setSidebarOpen,
    query,
    setQuery,
    messages,
    handleSend,
    onKeyDown,
    inView,
    initialWidth,
  };
}
