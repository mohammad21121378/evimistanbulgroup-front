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
import { useConsultationStore } from '@/stores/consultationStore';

const FreeConsultation = ({}: FreeConsultationProps) => {

  const { isOpen: sidebarOpen, onClose, initialValues, onToggle } = useConsultationStore();
  

  const consultationForm = useConsultationForm(initialValues);

  const {
    successfulResult
  } = consultationForm;

  return (
    <LayoutGroup>

      <Sidebar onClose={onClose} {...consultationForm} isOpen={sidebarOpen} />
      <ToggleButton isOpen={sidebarOpen} onClick={onToggle} />

      <Overlay isOpen={sidebarOpen} onClose={onClose} />
      <LeftSide isOpen={!successfulResult && sidebarOpen} />

    </LayoutGroup>
  );
};

export default FreeConsultation;
