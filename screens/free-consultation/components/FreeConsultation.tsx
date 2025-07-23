'use client';

import React from 'react';
import { LayoutGroup } from 'framer-motion';


import Sidebar from './Sidebar';
import ToggleButton from './ToggleButton';
import { useChatbot } from '../hooks/useChatbot';
import { ChatbotInputProps } from '../types/chatBot';

const FreeConsultation = ({ placeholder, iconRight, initialOpen, setInitialOpen, ...props }: ChatbotInputProps) => {
  const {
    chatContent,
    sidebarOpen,
    setSidebarOpen,
    messages,
  } = useChatbot(initialOpen, setInitialOpen);

  return (
    <LayoutGroup>

      <Sidebar isOpen={sidebarOpen} messages={messages} chatContent={chatContent} />
      <ToggleButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((prev) => !prev)} />

      {sidebarOpen && <div className="overlay FadeInAnimate" onClick={() => setSidebarOpen(false)} />}

    </LayoutGroup>
  );
};

export default FreeConsultation;
