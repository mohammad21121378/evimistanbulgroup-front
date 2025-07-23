import { toast as reactToast, Toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

type ToastType = 'success' | 'error' | 'info';

interface ToastColor {
  title: string;
  titleBg: string;
  bodyBg: string;
}

const getToastColor = (type: ToastType): ToastColor => {
  switch (type) {
    case 'success':
      return {
        title: 'successful',
        titleBg: 'bg-green-700',
        bodyBg: 'bg-green-600',
      };
    case 'error':
      return {
        title: 'Hata',
        titleBg: 'bg-red-700',
        bodyBg: 'bg-red-600',
      };
    case 'info':
    default:
      return {
        title: 'Bilgilendirme',
        titleBg: 'bg-blue-700',
        bodyBg: 'bg-blue-600',
      };
  }
};

export const toast = (
  type: ToastType,
  message: string,
  allowClose: boolean = true
): void => {
  const { title, titleBg, bodyBg } = getToastColor(type);

  reactToast.custom((t: Toast) => (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25 }}
          className="rounded-md overflow-hidden shadow-md w-fit flex max-w-2xl items-stretch"
        >
          <div
            className={`${titleBg} capitalize text-white text-base font-bold px-2.5 min-h-11 flex items-center justify-center py-2`}
          >
            {title}
          </div>
          <div
            className={`${bodyBg} text-white text-sm font-medium px-4 min-h-11 flex items-center py-2 justify-center`}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  ), {
    duration: allowClose ? 4500 : Infinity,
  });
};
