'use client';

import GuidesAndInsightsListing from '@/components/guides-and-Insights-listing';
import { useNumberedPagination } from '@/hooks/useNumberedPagination';
import Pagination from '@/components/ui/Pagination';

import { useMockInsights } from '../hooks/useMockInsights';

export default function Insights() {
  const mockData = useMockInsights(25);

  const { currentPage, totalPages, items, goToPage } = useNumberedPagination({
    limit: 12,
    initialData: mockData,
    scrollTo: {desktop: 450, mobile:925}
  });

  return (
    <section>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {items.map((item, index) => (
          <GuidesAndInsightsListing key={index} {...item} />
        ))}
      </div>

      <div className="sm:col-span-2 mt-10">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
      </div>
    </section>
  );
}
