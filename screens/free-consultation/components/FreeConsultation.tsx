'use client';

import React from 'react';
import { LayoutGroup } from 'framer-motion';


import Sidebar from './Sidebar';
import ToggleButton from './ToggleButton';
import { useSidebar } from '../hooks/useSidebar';
import Overlay from '@/components/ui/Overlay';
import LeftSide from './LeftSide';
import { useConsultationForm } from '../hooks/useConsultationForm';
import { FreeConsultationProps } from '../types';

const FreeConsultation = ({ initialOpen, setInitialOpen}: FreeConsultationProps) => {

  const {
    chatContent,
    sidebarOpen,
    setSidebarOpen,
  } = useSidebar(initialOpen, setInitialOpen);

  const consultationForm = useConsultationForm();

  const {
    successfulResult
  } = consultationForm;

  return (
    <LayoutGroup>

      <Sidebar onClose={() => setSidebarOpen((pre)=>!pre)} {...consultationForm} isOpen={sidebarOpen} chatContent={chatContent} />
      <ToggleButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((prev) => !prev)} />
      <Overlay isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <LeftSide isOpen={!successfulResult && sidebarOpen} />

    </LayoutGroup>
  );
};

export default FreeConsultation;
