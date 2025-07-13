import { useMemo } from 'react'

export function useMockInsights(limit: number) {
  return useMemo(() => {
    return Array.from({ length: limit }, (_, i) => ({
      category: 'Business',
      categoryColor: 'blue',
      timeToRead: `${(i % 5) + 2} min read`,
      title: `Business Guide #${i + 1}`,
      description: `This is a short description for business guide number ${i + 1}.`,
      imageSrc: `/images/insights/1.png`,
      date: `2025-07-${String((i % 28) + 1).padStart(2, '0')}`,
    }))
  }, [limit])
}
