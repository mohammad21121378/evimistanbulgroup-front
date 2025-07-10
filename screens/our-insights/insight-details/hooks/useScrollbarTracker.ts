import { useEffect } from "react";

export function useScrollbarTracker() {
  useEffect(() => {
    const scrollbarInner = document.getElementById("scrollbar-inner");
    if (!scrollbarInner) return;

    const updateScrollbar = () => {
      const contentHeight = document.body.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewHeight = window.innerHeight;
      const progress = (scrollTop / (contentHeight - viewHeight)) * 100;
      scrollbarInner.style.width = scrollTop === 0 ? "0%" : `${progress}%`;
    };

    window.addEventListener("scroll", updateScrollbar);
    return () => window.removeEventListener("scroll", updateScrollbar);
  }, []);
}
