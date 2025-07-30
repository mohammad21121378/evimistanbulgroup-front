'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import AnimatedText from '@/components/ui/AnimateText'
import ChatListing from '@/components/chat-listing/ChatListing'
import Overlay from '@/components/ui/Overlay'

import Footer from './Footer'
import { useChatBot } from '../hooks/useChatBot'
import IntroductionMessage from './IntroductionMessage'
import ToggleButton from './ToggleChat'
import Button from '@/components/ui/Button'



export default function ChatBot() {

    const {
        isOpen,
        messages,
        input,
        toggleChat,
        sendMessage,
        setInput,
        messagesRef,
        isTyping,
        activelimitation,
        onOpenConsultation,
        activeCleanButton,
        onClean
    } = useChatBot();


    return (
        <>
            <ToggleButton isOpen={isOpen} toggleChat={toggleChat} />

            <Overlay isOpen={isOpen} onClose={toggleChat} className='!z-[9999999]' />

            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, width: 0, height: 0, }}
                        animate={{ opacity: 1, width: '35rem', height: '45rem', }}
                        exit={{ opacity: 0, width: 0, height: 0, }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className=" fixed z-[99999999] left-8 bottom-8  h-[28rem] bg-white border border-zinc-300  rounded-2xl shadow-xl flex flex-col overflow-hidden"
                    >

                        <div className='pb-10  bg-zinc-50'>
                            <div className="flex items-start justify-between  px-4 pt-5 pb-3 border-b bg-[linear-gradient(90deg,#ea580c_0%,#f97316_100%)]">

                                <div className="text-xl flex items-center gap-1 font-semibold text-white"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" className="w-[1.6rem] -mt-2.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.1 4.4A26.7 26.7 0 0 0 7.6 43.7c.8 1.5 1 3.2.6 5L6 56.5l8.1-2.2c1.7-.4 3.4-.1 4.8.6A26.7 26.7 0 1 0 31.1 4.4zm0-4.4A31.1 31.1 0 0 0 3.7 45.8c.3.5.4 1.1.2 1.7L.8 59c-.5 1.7 1 3.2 2.7 2.8l11.9-3.2c.5-.1 1.1 0 1.6.2A31.1 31.1 0 1 0 31.1 0z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.1 30.3a5 5 0 0 0-5 5v6.4c0 1-.9 1.8-1.9 1.8h-6.7c-1.3 0-2.3-1-2.3-2.3V27.5c0-3.4 0-3.7 1.3-4.5l11.8-6.8c1.1-.6 1.9-1 2.8-1 1 0 1.8.4 2.8 1L45.8 23c1.3.8 1.3 1.1 1.3 4.5v13.7c0 1.3-1 2.3-2.3 2.3H38c-1 0-1.9-.8-1.9-1.9v-6.2a5 5 0 0 0-5-5z" fill="#fff"></path></svg><AnimatedText noneAnimate delay={300} title='EvimGPT' /></div>

                                <button onClick={toggleChat} className="text-white hover:scale-110 transition mt-1">
                                    <X className="size-6" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 space-y-2 bg-zinc-50 py-8 scrollbar-sm" ref={messagesRef}>

                            <IntroductionMessage />

                            {messages.map((msg, i) => (
                                <ChatListing key={i} msg={msg} />
                            ))}

                            {
                                activelimitation &&
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    transition={{ duration: .5 }}
                                >
                                    <Button outline gradient={false} onClick={onOpenConsultation} size='auto' className='!h-12 animate-fade-custom !text-sm font-bold !rounded-md !w-[88%] !min-w-[88%] !max-w-none mx-auto'>
                                        Book A Free Consultation
                                    </Button>
                                </motion.div>
                            }

                        </div>


                        <Footer activeCleanButton={activeCleanButton} onClean={onClean} sendMessage={sendMessage} input={input} setInput={setInput} isTyping={isTyping} activelimitation={activelimitation} />

                    </motion.div>
                )}


            </AnimatePresence>
        </>
    )
}