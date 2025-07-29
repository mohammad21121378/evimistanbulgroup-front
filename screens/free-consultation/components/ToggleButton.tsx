import { motion } from 'framer-motion';
import { iconVariants } from '../animations/chatbotAnimations';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import Portal from '@/components/ui/Portal';
import { ToggleButtonProps } from '../types';
import Lottie from 'lottie-react';
import arrowAnimation from "@/lotties/Arrow.json";

const ToggleButton = ({ isOpen, onClick }: ToggleButtonProps) => (
  <Portal>
    <motion.button
      onClick={onClick}
      whileHover="hover"
      variants={iconVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      initial="initial"
      className={`fixed z-[100] !rotate-180 overflow-hidden clip-path-custom ${isOpen ? 'sm:right-[36.2rem] right-[27.95rem]' : 'right-0'} top-1/2 -translate-y-1/2 transition-all duration-500`}
    >
      <svg className='w-[5.65rem]' viewBox="0 0 70 130">
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
              className={`left-2.5 z-10 absolute top-0 text-lg my-auto bottom-0  text-white  ${isOpen ? 'animate-left-to-right' : ' animate-right-to-left'}`}
            />
            :
            <div className={`-left-[1.175rem] z-10 absolute rotate-90 top-1/2 -translate-y-1/2 bottom-0  text-white w-5 [animation-delay:.3s]`}>
              <Lottie animationData={arrowAnimation}  />
            </div>
        }
      </motion.div>

    </motion.button>
  </Portal>
);

export default ToggleButton;
