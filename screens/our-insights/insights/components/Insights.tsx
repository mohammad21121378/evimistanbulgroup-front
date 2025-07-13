'use client';

import { usePagination } from '@/hooks/usePagination';
import GuidesAndInsightsListing from '@/components/guides-and-Insights-listing';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { useMockInsights } from '../hooks/useMockInsights';

const LIMIT = 8;

export default function Insights() {
  const mockData = useMockInsights(25);

  const { items, loadMore, loading, hasMore } = usePagination({
    limit: LIMIT,
    initialData: mockData,
  });

  return (
    <section>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {items.map((item, index) => (
          <GuidesAndInsightsListing key={index} {...item} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <LoadMoreButton onClick={loadMore} loading={loading} />
        </div>
      )}
    </section>
  );
}
