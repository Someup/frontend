import { Suspense } from 'react';
import SummaryResult from '@/components/summary/SummaryResult';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import { getSummary } from '@/lib/api/summary';

export function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrefetchBoundary
        fetchQueryOptions={[
          {
            queryKey: ['summary', id],
            queryFn: () => getSummary(id),
          },
        ]}
      >
        <SummaryResult id={id} />
      </PrefetchBoundary>
    </Suspense>
  );
}

export default ResultPage;
