import { motion, AnimatePresence } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Overlay({ isOpen, onClose }: OverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[rgba(29,_41,_57,_0.4)] backdrop-blur-sm flex items-center justify-center z-[99]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}
