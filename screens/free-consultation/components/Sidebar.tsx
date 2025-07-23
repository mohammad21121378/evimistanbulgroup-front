import { AnimatePresence, motion } from 'framer-motion';

import { ChatSidebarProps } from '../types/chatSidebar';
import Portal from '@/components/ui/Portal';
import ConsultationForm from './ConsultationForm';

const Sidebar = ({ isOpen, messages, chatContent }: ChatSidebarProps) => (
  <Portal>
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 1000, damping: 100 }}
          className="fixed top-0 right-0 h-dvh w-[36.25rem] bg-white z-[101] shadow-lg"
        >
          <div
            ref={chatContent}
            className="h-dvh grid grid-rows-[1fr] box-border overflow-hidden p-5"
          >
            <ConsultationForm />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  </Portal>
);

export default Sidebar;
