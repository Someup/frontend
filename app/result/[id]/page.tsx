import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import PostDetail from '@/components/post/post-detail';
import postQuerys from '@/lib/service/post/post-queries';
import FeedbackBox from '@/components/summary/feadback-box';
import SummarySaveButton from '@/components/summary/summary-save-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '요약 결과보기',
};

function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <div className="mx-auto flex max-w-[960px] flex-1 flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <PrefetchBoundary
            fetchQueryOptions={postQuerys.detail({ id, status: 'draft' })}
          >
            <PostDetail id={id} readOnly={true} status="draft" />
          </PrefetchBoundary>
        </Suspense>
        <SummarySaveButton postId={id} isLoggedIn={true} />
      </div>
      <FeedbackBox />
    </>
  );
}

export default ResultPage;
