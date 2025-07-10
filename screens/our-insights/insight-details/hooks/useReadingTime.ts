import { useMemo } from "react";

export function useReadingTime(text: string): number {
  return useMemo(() => {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [text]);
}
