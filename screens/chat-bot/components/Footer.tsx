'use client'

import Input from "@/components/ui/input"
import classNames from "classnames";
import { LucideSend } from "lucide-react";
import { GiBroom } from "react-icons/gi";
import { motion } from 'framer-motion'
import Tippy from "@tippyjs/react";
import ConfirmDialog from "@/components/confirm-dialog";
import { useState } from "react";

type Props = {
    sendMessage: () => void;
    onClean: () => void;
    input: string;
    setInput: (val: string) => void;
    isTyping: boolean;
    activelimitation: boolean;
    activeCleanButton: boolean;
}

export default function Footer({ sendMessage, input, setInput, isTyping, activelimitation, activeCleanButton, onClean }: Props) {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <>
            <ConfirmDialog
                show={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => {
                    onClean();
                    setShowConfirm(false);
                }}
                title="Clear all conversations?"
                description="Are you sure you want to delete all your chats and start a new conversation with EvimGPT?"
                confirmText="Yes, clear"
                cancelText="Cancel"
            />
            <div className="border-t px-4 py-3 bg-white">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        sendMessage()
                    }}
                    className="flex items-center gap-2"
                >

                    {
                        activeCleanButton &&
                        <Tippy
                            content="Clear Chat"
                            theme='dark'
                            className="text-base"
                            placement="top"
                            animation="scale-subtle"
                            duration={300}
                            interactive={true}
                        >
                            <motion.button

                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: .3 }}
                                type="button"
                                onClick={() => setShowConfirm(isTyping ? false : true)}
                                className={classNames("h-12 w-14 outline outline-1 outline-gray-600 transition-all duraction-300 text-center text-white rounded-lg  bg-gray-600",
                                    {
                                        "cursor-wait": isTyping,
                                        "hover:text-gray-600 hover:bg-white": !isTyping,
                                    })}>
                                <GiBroom className={classNames(
                                    "size-7 mx-auto",
                                    { "animate-pulse": isTyping },
                                )} />
                            </motion.button>
                        </Tippy>
                    }


                    <Input
                        placeholder="Need help? Write to EvimGPT and get instant answers..."
                        className="!rounded-lg"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        disabled={activelimitation}
                        autoCapitalize="none"
                        autoComplete="none"
                    />

                    <button type="submit" className={classNames("h-12 w-14 outline outline-1 outline-orange-600 transition-all duraction-300 text-center text-white rounded-lg  bg-orange-600",
                        {
                            "cursor-wait": isTyping,
                            "cursor-not-allowed opacity-60": activelimitation,
                            " hover:bg-white hover:text-orange-600": !isTyping && !activelimitation,

                        })}>
                        <LucideSend className={classNames(
                            "mx-auto w-7",
                            {
                                "animate-pulse": isTyping,

                            },
                        )} />
                    </button>

                </form>
            </div>
        </>
    )
}