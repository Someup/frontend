import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import SummaryResult from '@/components/summary/SummaryResult';
import summaryQuerys from '@/lib/service/summary/summaryQueries';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';

function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <span
        className={cn(
          typography({ scale: 'head-2' }),
          'grid place-content-center',
        )}
      >
        Summary Result
      </span>
      <Suspense fallback={<div>Loading...</div>}>
        <PrefetchBoundary fetchQueryOptions={summaryQuerys.detail(id)}>
          <SummaryResult id={id} />
        </PrefetchBoundary>
      </Suspense>
    </>
  );
}

export default ResultPage;
