// utils/preserveViewParam.ts
export function preserveViewParam(url: string): string {
    if (typeof window === "undefined") return url;
    
    const currentParams = new URLSearchParams(window.location.search);
    const view = currentParams.get("view");
    return view ? `${url}?view=${view}` : url;
  }
  