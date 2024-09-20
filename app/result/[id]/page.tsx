import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import SummaryResult from '@/components/summary/SummaryResult';
import summaryQuerys from '@/lib/service/summary/summaryQueries';

export function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrefetchBoundary fetchQueryOptions={summaryQuerys.detail(id)}>
        <SummaryResult id={id} />
      </PrefetchBoundary>
    </Suspense>
  );
}

export default ResultPage;
