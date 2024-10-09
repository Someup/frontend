import { Suspense } from 'react';
import { PrefetchBoundary } from '@/components/utils/PrefetchBoundary';
import PostDetail from '@/components/post/post-detail';
import postQuerys from '@/lib/service/post/post-queries';
import { Metadata } from 'next';
import { fetchPost } from '@/lib/service/post/post-service';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const post = await fetchPost({ id, status: 'published' });

  return {
    title: post.title,
  };
}

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
