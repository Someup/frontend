import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import PostDetail from '@/components/post/post-detail';
import postQuerys from '@/lib/service/post/post-queries';

function PostsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PrefetchBoundary
          fetchQueryOptions={postQuerys.detail({ id, status: 'published' })}
        >
          <PostDetail id={id} readOnly={true} status="published" />
        </PrefetchBoundary>
      </Suspense>
    </>
  );
}

export default PostsPage;
