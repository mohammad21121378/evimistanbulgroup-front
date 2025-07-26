'use client';

import GuidesAndInsightsListing from '@/components/guides-and-Insights-listing';
import Pagination from '@/components/ui/Pagination';

import { useMockInsights } from '../hooks/useMockInsights';
import { useInsightPagination } from '../hooks/useInsightPagination';
import {Article} from "../../../../types/Article";


interface Props {
    articles:Article[];
    last_page:number;
    category:string | undefined;
}

export default function Insights({articles,last_page,category}:Props) {
  const { currentPage, totalPages, items, goToPage } = useInsightPagination({
    limit: 20,
    initialData: articles,
    total_page:last_page,
    category,
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
