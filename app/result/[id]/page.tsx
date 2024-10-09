import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import PostDetail from '@/components/post/post-detail';
import postQuerys from '@/lib/service/post/post-queries';
import FeedbackBox from '@/components/summary/feadback-box';
import SummarySaveButton from '@/components/summary/summary-save-button';
import { Metadata } from 'next';
import Spinner from '@/components/ui/spinner';

export const metadata: Metadata = {
  title: '요약 결과보기',
};

function ResultPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-[960px] flex-col">
        <Suspense fallback={<Spinner className="m-auto" />}>
          <PrefetchBoundary
            fetchQueryOptions={postQuerys.detail({ id, status: 'draft' })}
          >
            <PostDetail id={id} readOnly={true} status="draft" />
          </PrefetchBoundary>
        </Suspense>
        <SummarySaveButton postId={id} isLoggedIn={true} />
        <FeedbackBox />
      </div>
    </>
  );
}

export default ResultPage;
