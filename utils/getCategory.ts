const categories = {
    penthouse: 179,
    landforsale: 181,
    hotelforsale: 182,
    apartment: 176,
    villa: 177,
    commercial: 178,
  } as const;
  
  type CategoryKey = keyof typeof categories;
  
  export default function getCategory(cat: string): number | undefined {
    const key = cat.toLowerCase().replace(/\s+/g, '') as CategoryKey;
    
    return categories[key];
  }
  