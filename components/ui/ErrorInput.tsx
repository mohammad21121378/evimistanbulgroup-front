"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
    error?: string | boolean
}

export default function ErrorInput({ error }: Props) {
    return (
        <AnimatePresence>
            {error && typeof error === 'string' ? (
                <motion.div
                    className="text-red-500 flex items-center flex-nowrap gap-1 text-xs mt-0.5 truncate whitespace-nowrap"
                    title={error}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.00033 12.8332C3.77866 12.8332 1.16699 10.2215 1.16699 6.99984C1.16699 3.77817 3.77866 1.1665 7.00033 1.1665C10.222 1.1665 12.8337 3.77817 12.8337 6.99984C12.8337 10.2215 10.222 12.8332 7.00033 12.8332ZM7.00033 11.6665C9.57767 11.6665 11.667 9.57718 11.667 6.99984C11.667 4.42251 9.57767 2.33317 7.00033 2.33317C4.423 2.33317 2.33366 4.42251 2.33366 6.99984C2.33366 9.57718 4.423 11.6665 7.00033 11.6665ZM6.41699 8.74984H7.58366V9.9165H6.41699V8.74984ZM6.41699 4.08317H7.58366V7.58317H6.41699V4.08317Z"
                                fill="#F04438"
                            />
                        </svg>
                    </div>
                    <div className="truncate whitespace-nowrap">{error}</div>
                </motion.div>
            ) : ''}
        </AnimatePresence>
    );
}
