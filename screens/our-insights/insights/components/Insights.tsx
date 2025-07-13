'use client'

import { useState } from 'react'
import GuidesAndInsightsListing from '@/components/guides-and-Insights-listing'
import LoadMoreButton from '@/components/ui/LoadMoreButton'
import { useMockInsights } from '../hooks/useMockInsights'

const LIMIT = 8

export default function Insights() {
  
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(LIMIT)

  const allInsights = useMockInsights(25)
  const visibleInsights = allInsights.slice(0, visibleCount)
  const hasMore = visibleCount < allInsights.length

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + LIMIT)
      setLoading(false)
    }, 1500)
  }
  

  return (
    <section>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          {visibleInsights.map((item, index) => (
            <GuidesAndInsightsListing key={index} {...item} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <LoadMoreButton onClick={handleLoadMore} loading={loading} />
          </div>
        )}
    </section>
  )
}
