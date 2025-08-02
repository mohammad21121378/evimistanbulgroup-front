'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';
import Portal from '../ui/Portal';
import classNames from 'classnames';
import Tippy from '@tippyjs/react';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'fa', label: 'فارسی' },
    { code: 'ar', label: 'العربية' },
];

type Props = {
    className?: string;
};

export default function LanguageModal({ className }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedLang, setSelectedLang] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const closeModal = () => {
        setIsOpen(false);
        setSelectedLang(null);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                closeModal();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setSelectedLang(currentLocale); // زبان فعلی را موقع باز شدن تنظیم کن
        }
    }, [isOpen, currentLocale]);

    const confirmSelection = () => {
        setLoading(true)
        if (selectedLang && selectedLang !== currentLocale) {
            const newPath = `/${selectedLang}${pathname.replace(`/${currentLocale}`, '')}`;
            router.replace(newPath);
            // closeModal();
        }
    };

    return (
        <div className="z-50">
            <Tippy
                content={'Select Language'}
                theme='dark'
                placement="bottom"
                animation="scale-subtle"
                duration={300}
                className='!bg-gray-900 font-bold px-3.5 py-1 rounded-lg'
                interactive={true}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className={classNames(
                        "flex items-center gap-2 px-3 h-12 bg-transparent text-gray-700 shadow-[0_0_0_1.5px_#e2e8f0_inset] hover:shadow-[0_0_0_1.5px_#111827_inset] rounded-xl hover:bg-gray-900 duration-300 hover:text-white transition-all ml-1.5",
                        className
                    )}
                >
                    <Globe className="w-6" />
                </button>
            </Tippy>

            <Portal>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 z-[9999] left-0 w-full h-full bottom-0 bg-black/40 flex items-center justify-center backdrop-blur-sm px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                ref={modalRef}
                                className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            >
                                <div className='flex justify-between items-center mb-4 text-gray-800 font-bold'>
                                    <h2 className="text-xl font-bold text-center ">
                                        Select your preferred language
                                    </h2>

                                    <button
                                        onClick={closeModal}
                                        className="hover:text-gray-900 mt-0.5"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="gap-2 flex justify-around mt-10">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setSelectedLang(lang.code)}
                                            className={`w-fit py-2.5 px-8 rounded-full outline outline-1 outline-slate-300 font-bold bg-slate-100 hover:outline-gray-700 text-center border transition-all duration-300 
                                                ${selectedLang === lang.code
                                                    ? '!bg-gray-900 outline-gray-900 text-white'
                                                    : 'bg-white text-gray-700 border-gray-300'
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={confirmSelection}
                                    disabled={!selectedLang || selectedLang === currentLocale}
                                    className={`w-full py-3 mt-8 outline outline-1 outline-slate-300 rounded-lg font-medium transition-all ${
                                        selectedLang && selectedLang !== currentLocale
                                            ? 'bg-gray-900 text-white hover:bg-gray-900'
                                            : 'bg-transparent text-gray-400 cursor-not-allowed'
                                    }
                                    ${loading ? 'cursor-wait animate-pulse' : '' }
                                    `}
                                >
                                    Apply
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Portal>
        </div>
    );
}
