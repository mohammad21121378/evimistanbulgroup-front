'use client'

import { useState } from 'react'
import GuidesAndInsightsListing from '@/components/guides-and-Insights-listing'
import LoadMoreButton from '@/components/ui/LoadMoreButton'
import { useMockInsights } from '../hooks/useMockInsights'

const LIMIT = 9

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
    <section className="section pt-10">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
          {visibleInsights.map((item, index) => (
            <GuidesAndInsightsListing key={index} {...item} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <LoadMoreButton onClick={handleLoadMore} loading={loading} />
          </div>
        )}
      </div>
    </section>
  )
}
