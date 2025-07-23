"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    Send,
    Share2,
} from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/utils/toast";

type Props = {
    url: string;
    children: ReactNode
}

export default function ShareBox({ url, children }: Props) {
    const [open, setOpen] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    const fullUrl = "https://evimistanbulgroup.com/en" + url ?? url;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(fullUrl);
        toast("success", "Copied to the clipboard");
        setOpen(false);
    };

    const shareItems = [
        {
            name: "کپی لینک",
            icon: <Copy size={20} />,
            onClick: handleCopy,
        },
        {
            name: "واتساپ",
            icon: <FaWhatsapp size={20} />,
            href: `https://wa.me/?text=${encodeURIComponent(fullUrl)}`,
        },
        {
            name: "تلگرام",
            icon: <FaTelegramPlane size={20} />,
            href: `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}`,
        },
        {
            name: "توییتر",
            icon: <Twitter size={20} />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}`,
        },
        {
            name: "لینکدین",
            icon: <Linkedin size={20} />,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
        },
        {
            name: "فیسبوک",
            icon: <Facebook size={20} />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
        };
      
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

    return (
        <div className="relative" ref={boxRef}>

            <span
            className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}>
                {
                    children
                }

            </span>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -10, x: '-50%' }}
                        className="absolute z-50 mt-2 w-fit px-6 left-1/2 rounded-xl shadow-lg bg-white outline outline-1 outline-gray-300 py-3 flex gap-3"
                    >
                        {shareItems.map((item, index) => (
                            item.href ? (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                                >
                                    {item.icon}
                                    {/* {item.name} */}
                                </a>
                            ) : (
                                <button
                                    key={index}
                                    onClick={item.onClick}
                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                                >
                                    {item.icon}
                                    {/* {item.name} */}
                                </button>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
