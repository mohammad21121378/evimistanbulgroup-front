"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ExpandableHtml({ html, showAll=false }: { html: string; showAll?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const COLLAPSED_HEIGHT = 144;

  useLayoutEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);

      const difference = height - COLLAPSED_HEIGHT;

      if (difference > 32 && !showAll) {
        setShouldShowToggle(true);
      } else {
        setShouldShowToggle(false);
      }
    }
  }, [html]);

  const toggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
    <div className="relative w-full rounded-xl outline outline-1 outline-gray-50 bg-white p-4 pb-5 transition-all duration-300">
      <motion.div
        className="overflow-hidden"
        animate={{ height: expanded ? contentHeight : (shouldShowToggle ? COLLAPSED_HEIGHT : 'auto') }}
        initial={false}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 140,
        }}
      >
        <div ref={contentRef}>
          <div
            className="prose prose-sm max-w-none text-gray-700 has-iframe"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </motion.div>
      
      {!expanded && shouldShowToggle && (
        <div className="absolute bottom-[3rem] left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10 rounded-b-xl" />
      )}
      
      {shouldShowToggle && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            <motion.span
              key={expanded ? "less" : "more"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {expanded ? "Show less" : "Show more"}
            </motion.span>

            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>
        </div>
      )}

    </div>
    

    </>
  );
}
