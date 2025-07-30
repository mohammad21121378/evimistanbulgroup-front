import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string
}

export default function Overlay({ isOpen, onClose, className }: OverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={classNames("fixed inset-0 bg-[rgba(29,_41,_57,_0.4)] backdrop-blur-sm flex items-center justify-center z-[99]", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}
