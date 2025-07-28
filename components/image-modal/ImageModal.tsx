'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import Portal from '../ui/Portal';
import cn from 'classnames';

interface ImageModalProps {
  src: string;
  alt?: string;
  className?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export default function ImageModal({
  
  src,
  alt = '',
  className = '',
  imgProps = {},
}: ImageModalProps) {

    const
    [isOpen,
  setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false);
  }

  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <>
    <img src={src} alt={alt} onClick={() => setIsOpen(true)} className={cn(className, "cursor-zoom-in")} {...imgProps} />
    <Portal>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-5xl w-[90%] rounded-2xl overflow-hidden shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={src}
              alt={alt}
              className={`w-full h-auto object-contain max-h-[90vh] rounded-md`}
              {...imgProps}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </Portal>
    </>
  );
}
