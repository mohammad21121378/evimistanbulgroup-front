// lib/skipCurtain.ts

// این متغیر فقط در حافظهٔ سرور جاوااسکریپت نگهداری می‌شود
let skipNext = false;

/**
 * برای چک اینکه Curtain در next navigation باید skip شود یا خیر.
 * اگر true برگرداند، فورتاً آن را ری‌ست می‌کند.
 */
export function shouldSkipCurtain(): boolean {
  const v = skipNext;
  skipNext = false;
  return v;
}

/** وقتی می‌خواهیم Curtain را در navigation بعدی skip کنیم، این را صدا بزنیم */
export function skipCurtainNext(): void {
  skipNext = true;
}
