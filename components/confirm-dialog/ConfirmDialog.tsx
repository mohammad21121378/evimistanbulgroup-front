'use client';

import Portal from '@/components/ui/globals/Portal';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
};

export default function ConfirmDialog({
  show,
  onClose,
  onConfirm,
  title = "Emin misiniz?",
  description = "Bu öğeyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
  confirmText = "Evet, sil",
  cancelText = "Vazgeç",
}: Props) {
  return (
    <Portal>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  {cancelText}
                </button>
                <button
                  onClick={onConfirm}
                  className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
