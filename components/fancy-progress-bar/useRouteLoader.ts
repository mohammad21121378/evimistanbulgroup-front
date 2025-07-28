// useRouteLoader.ts
'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function useRouteLoader(): boolean {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a') as HTMLAnchorElement | null;

      if (
        link &&
        link.href &&
        link.origin === window.location.origin &&
        link.pathname !== window.location.pathname
      ) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handleComplete);
    window.addEventListener('load', handleComplete);

    const originalPrefetch = router.prefetch;
    router.prefetch = () => {}; // اختیاری، اگر واقعا می‌خوای غیر فعالش کنی

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handleComplete);
      window.removeEventListener('load', handleComplete);
      router.prefetch = originalPrefetch;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [router]);

  useEffect(() => {
    if (loading) {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setLoading(false);
        });
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
  }, [pathname]);

  return loading;
}
