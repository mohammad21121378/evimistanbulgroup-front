export function formatNumber(amount: number, locale: string = "en-US"): string {
    if (typeof amount !== "number" || isNaN(amount)) {
      console.error("amount must be a valid number");
      return "";
    }
  
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  