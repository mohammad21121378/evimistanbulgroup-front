// useMockInsights.ts
import { useMemo } from 'react'

export function useMockInsights(limit: number) {
  return useMemo(() => {
    return Array.from({ length: limit }, (_, i) => ({
        category: 'Business',
        categoryColor: 'blue',
        timeToRead: `${(i % 5) + 2} دقیقه`,
        title: `راهنمای کسب‌وکار شماره ${i + 1}`,
        description: `توضیحات مختصر برای راهنمای شماره ${i + 1} اینجا قرار می‌گیرد.`,
        imageSrc: `/images/insights/1.png`,
        date: `۱۴۰۳/۰۴/${(i % 28) + 1}`,
    }))
  }, [limit])
}
