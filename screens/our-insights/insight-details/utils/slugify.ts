export function slugifyHeading(text: string): string {
    return text.trim().replace(/\s+/g, "-").replace(/-$/, "");
  } 