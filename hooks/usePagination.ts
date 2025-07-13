import { useEffect, useState } from 'react';

interface UsePaginationOptions<T> {
  limit: number;
  fetcher?: (offset: number, limit: number) => Promise<T[]>;
  initialData?: T[];
}

export function usePagination<T>({
  limit,
  fetcher,
  initialData = [],
}: UsePaginationOptions<T>) {
  const [visibleCount, setVisibleCount] = useState(limit);
  const [loading, setLoading] = useState(false);

  // reset visibleCount when initialData changes
  useEffect(() => {
    setVisibleCount(limit);
  }, [initialData, limit]);

  const loadMore = async () => {
    setLoading(true);

    if (fetcher) {
      // حالت API (نه در این مثال)
      const newData = await fetcher(visibleCount, limit);
      setLoading(false);
      return;
    }

    setTimeout(() => {
        setVisibleCount(prev => prev + limit);
        setLoading(false);
    }, 1500)
  };

  const visibleItems = fetcher
    ? initialData
    : initialData.slice(0, visibleCount);

  const hasMore = fetcher
    ? true // این باید وابسته به پاسخ API باشد
    : visibleCount < (initialData?.length ?? 0);

  return {
    items: visibleItems,
    loadMore,
    loading,
    hasMore,
  };
}
