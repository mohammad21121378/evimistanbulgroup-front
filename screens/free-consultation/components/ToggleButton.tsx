import { motion } from 'framer-motion';
import { iconVariants } from '../animations/chatbotAnimations';
import { ChatToggleButtonProps } from '../types/chatToggleButton';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import Portal from '@/components/ui/Portal';

const ToggleButton = ({ isOpen, onClick }: ChatToggleButtonProps) => (
  <Portal>
    <motion.button
      onClick={onClick}
      whileHover="hover"
      variants={iconVariants}
      initial="initial"
      className={`fixed z-[100] !rotate-180 overflow-hidden clip-path-custom ${isOpen ? 'right-[36.21rem]' : '-right-full'} top-1/2 -translate-y-1/2 transition-all duration-500`}
    >
      <svg width="70" height="130" viewBox="0 0 70 130">
        <path
          d="M17 6.5 C25.5 8.5, 32 21, 32 36 L32 94 C32 109, 25.5 121.5, 17 123.5 L0 130 L0 0 Z"
          fill="#EA580C"
          stroke="#D1D5DB"
          strokeWidth="2"
        />
      </svg>

      <motion.div
        variants={iconVariants}
        initial="initial"
        animate="initial"
        className='overflow-hidden'
      >
        {
          isOpen ?
            <FaAnglesLeft
              className={`left-1.5 z-10 absolute top-0 my-auto bottom-0  text-white  ${isOpen ? 'animate-left-to-right' : ' animate-right-to-left'}`}
            />
            :
            <FaAnglesRight
              className={`left-1.5 z-10 absolute top-0 my-auto bottom-0  text-white  ${isOpen ? 'animate-left-to-right' : ' animate-right-to-left'}`}
            />

        }
      </motion.div>

    </motion.button>
  </Portal>
);

export default ToggleButton;
