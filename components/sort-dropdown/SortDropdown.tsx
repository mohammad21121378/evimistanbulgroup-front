import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
];

export default function SortDropdown({ value, onChange }: {
    value: string;
    onChange: (val: string) => void;
}) {

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const selected = sortOptions.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative md:inline-block block text-left z-10">

            <button
                onClick={() => setOpen(!open)}
                className="inline-flex justify-between items-center gap-2 md:w-40 w-full rounded-md border bg-slate-100 border-gray-300  px-4 md:py-2.5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-500"
            >
                <span className="truncate">
                    {selected?.label || "Sort By"}
                </span>

                <div>
                    <svg className="text-gray-500 w-4" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 4H13V6H3V4ZM0 0H16V2H0V0ZM6 8H10V10H6V8Z" fill="currentColor" />
                    </svg>
                </div>

            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: -20, scale: .5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: .5 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 mt-2 md:w-48 w-full outline outline-1 outline-slate-200 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        ref={dropdownRef}
                    >
                        <ul className="text-base text-gray-700  ">
                            {sortOptions.map((option) => (
                                <li key={option.value}>
                                    <button
                                        className={`w-full text-left px-4 py-2  shadow-sm hover:bg-gray-100 font-medium transition ${value === option.value ? "font-semibold text-orange-600" : ""
                                            }`}
                                        onClick={() => {
                                            onChange(option.value);
                                            setOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
