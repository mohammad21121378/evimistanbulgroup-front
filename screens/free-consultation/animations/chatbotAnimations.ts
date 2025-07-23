// src/features/home/chatbot/animations/chatbotAnimations.ts
export const slideUp = (width: number) => ({
    hidden: { width: 30, opacity: 0, y: 50 },
    visible: { width, opacity: 1, y: 0 },
    exit: { width: 30, opacity: 0, y: 50 },
  });
  
  export const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -6, 6, -2, 2, 0],
      transition: { duration: 0.6 },
    },
  };
  