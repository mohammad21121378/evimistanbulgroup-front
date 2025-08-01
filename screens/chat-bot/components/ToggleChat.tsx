'use client'

import { motion } from 'framer-motion'
import Tippy from '@tippyjs/react';
import BotAnime from "@/lotties/Anima Bot.json";
import Lottie from 'lottie-react';


type Props = {
    toggleChat: () => void;
    isOpen: boolean;
}

export default function ToggleButton({ toggleChat, isOpen }: Props) {
    return (
        <>
            {!isOpen && (
                <Tippy
                    content={
                        <div className="text-left max-w-xs p-2.5 pt-1.5">

                            <p className="font-bold text-xl flex items-center gap-0 ">
                                <span className='w-16 -ml-5'>
                                    <Lottie animationData={BotAnime} />
                                </span>
                                Say Hello to EvimGPT
                            </p>

                            <p className="text-base mt-0 pl-11 font-medium pb-1 leading-snug ">
                                Chat with Turkey’s first AI-Powered property search assistant and browse homes stress free!
                            </p>
                        </div>
                    }
                    theme='light'
                    placement="top"
                    animation="scale-subtle"
                    duration={200}
                    delay={[100, null]}
                    interactive={true}
                >
                    <motion.button
                        onClick={toggleChat}
                        initial={{ opacity: 0, width: 0, height: 0 }}
                        animate={{ opacity: 1, width: '11.5rem', height: '3.5rem' }}
                        exit={{ opacity: 0, width: 0, height: 0 }}
                        transition={{ duration: .2, ease: 'easeInOut' }}
                        className="
                            overflow-hidden
                            rounded-full 
                            bg-gradient-to-tr  
                            from-orange-500 
                            to-orange-700 
                            text-white 
                            animate-pulse-custom
                            flex items-center justify-center shadow-xl hover:shadow-xl 
                            fixed left-6 bottom-8 
                            z-50 font-bold gap-1
                            pb-1
                        "
                    >
                        <div>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" className="w-7 mt-[.155rem]"><path fillRule="evenodd" clipRule="evenodd" d="M31.1 4.4A26.7 26.7 0 0 0 7.6 43.7c.8 1.5 1 3.2.6 5L6 56.5l8.1-2.2c1.7-.4 3.4-.1 4.8.6A26.7 26.7 0 1 0 31.1 4.4zm0-4.4A31.1 31.1 0 0 0 3.7 45.8c.3.5.4 1.1.2 1.7L.8 59c-.5 1.7 1 3.2 2.7 2.8l11.9-3.2c.5-.1 1.1 0 1.6.2A31.1 31.1 0 1 0 31.1 0z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.1 30.3a5 5 0 0 0-5 5v6.4c0 1-.9 1.8-1.9 1.8h-6.7c-1.3 0-2.3-1-2.3-2.3V27.5c0-3.4 0-3.7 1.3-4.5l11.8-6.8c1.1-.6 1.9-1 2.8-1 1 0 1.8.4 2.8 1L45.8 23c1.3.8 1.3 1.1 1.3 4.5v13.7c0 1.3-1 2.3-2.3 2.3H38c-1 0-1.9-.8-1.9-1.9v-6.2a5 5 0 0 0-5-5z" fill="#fff"></path></svg>
                        </div>
                        <div className='text-lg block font-bold text-nowrap' style={{ transform: 'translateZ(0)' }}>
                            EvimGPT
                        </div>
                    </motion.button>
                </Tippy>
            )}
        </>
    )
}
