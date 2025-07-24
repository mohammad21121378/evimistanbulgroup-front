'use client';

import React from 'react';
import { LayoutGroup } from 'framer-motion';


import Sidebar from './Sidebar';
import ToggleButton from './ToggleButton';
import { useSidebar } from '../hooks/useSidebar';
import { ChatbotInputProps } from '../types/chatBot';
import Overlay from '@/components/ui/Overlay';

const FreeConsultation = ({ placeholder, iconRight, initialOpen, setInitialOpen, ...props }: ChatbotInputProps) => {
  const {
    chatContent,
    sidebarOpen,
    setSidebarOpen,
    messages,
  } = useSidebar(initialOpen, setInitialOpen);

  return (
    <LayoutGroup>

      <Sidebar isOpen={sidebarOpen} messages={messages} chatContent={chatContent} />
      <ToggleButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((prev) => !prev)} />
      <Overlay isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />


    </LayoutGroup>
  );
};

export default FreeConsultation;
