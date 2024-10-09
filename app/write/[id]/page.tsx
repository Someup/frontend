import PostEditor from '@/components/post/post-editor';
import { PostStatus } from '@/types/post-types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '요약 수정하기',
};

const WritePage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { status?: string };
}) => {
  const { id } = params;
  const status = searchParams?.status || 'draft';

  return <PostEditor id={id} status={status as PostStatus} />;
};

export default WritePage;
