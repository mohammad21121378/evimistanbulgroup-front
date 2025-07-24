import { AnimatePresence, motion } from 'framer-motion';

import Portal from '@/components/ui/Portal';
import ConsultationForm from './ConsultationForm';
import { SidebarProps } from '../types';
import SuccessfulResult from './SuccessfulResult';

export default function Sidebar({ isOpen, onClose, ...consultationForm }: SidebarProps) {

  const { successfulResult } = consultationForm;

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };
  return (


    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 1000, damping: 100 }}
            className="fixed top-0 right-0 h-dvh sm:w-[36.25rem] w-[28rem] bg-white z-[101] shadow-lg"
          >
            <div
              className="h-dvh grid grid-rows-[1fr] box-border overflow-hidden py-5 px-4"
            >
              <AnimatePresence mode="wait">
                {successfulResult && (
                  <motion.div
                    key="form"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='grid grid-rows-[1fr]'
                    variants={variants}
                    transition={{ duration: 0.4 }}
                  >
                    <ConsultationForm {...consultationForm} />
                  </motion.div>
                )}
                {!successfulResult && (
                  <motion.div
                    key="success"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='grid grid-rows-[1fr]'
                    variants={variants}
                    transition={{ duration: 0.4 }}
                  >
                    <SuccessfulResult onClose={onClose} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </Portal>
  )
};
