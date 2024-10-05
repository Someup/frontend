import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import PostDetail from '@/components/post/post-detail';
import postQuerys from '@/lib/service/post/post-queries';
import FeedbackBox from '@/components/summary/feadback-box';

function SummaryPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PrefetchBoundary
          fetchQueryOptions={postQuerys.detail({ id, status: 'draft' })}
        >
          <PostDetail id={id} readOnly={true} status="draft" />
        </PrefetchBoundary>
      </Suspense>
      <FeedbackBox />
    </>
  );
}

export default SummaryPage;
