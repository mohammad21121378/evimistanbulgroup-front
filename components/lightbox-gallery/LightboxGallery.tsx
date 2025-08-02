"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight, FaX } from "react-icons/fa6";

interface Props {
    images: string[];
}

export default function LightboxGallery({ images }: Props) {
    const [index, setIndex] = useState<number | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (index === null) return;
        if (e.key === "ArrowRight") {
            setIndex((prev) => (prev! + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
            setIndex((prev) => (prev! - 1 + images.length) % images.length);
        } else if (e.key === "Escape") {
            setIndex(null);
        }
    }, [index, images.length]);

    useEffect(() => {
        if (index !== null) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index, handleKeyDown]);

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        onClick={() => setIndex(i)}
                        className="w-36 h-3w-36 object-cover cursor-zoom-in rounded-xl transition-all duration-300 hover:shadow hover:scale-105 hover:-translate-y-3"
                        alt={`${src} | Evimistanbul Group`}
                    />
                ))}
            </div>

            <AnimatePresence>
                {index !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIndex(null)}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={images[index]}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: .2 }}
                                src={images[index]}
                                className="max-h-[80vh] object-contain mx-auto rounded-lg"
                                alt={` ${images[index]} | Evimistanbul Group`}
                            />

                            <button
                                onClick={() => setIndex((index - 1 + images.length) % images.length)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg transition-all duration-300 text-center bg-black/40 hover:bg-black/60 rounded-xl size-12"
                            >
                                <FaChevronLeft className="mx-auto" />
                            </button>

                            <button
                                onClick={() => setIndex((index + 1) % images.length)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg transition-all duration-300 text-center bg-black/40 hover:bg-black/60 rounded-xl size-12"
                            >
                                <FaChevronRight className="mx-auto" />
                            </button>

                            <button
                                onClick={() => setIndex(null)}
                                className="absolute top-0 right-4 text-white text-lg transition-all duration-300 bg-black/50 hover:bg-black/70 rounded-xl size-12"
                            >
                                <FaX className="mx-auto" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
