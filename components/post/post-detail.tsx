'use client';
import { FunctionComponent } from 'react';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Editor from '@/components/editor/editor';
import { PostStatus } from '@/types/post-types';
import PostTitle from '@/components/post/post-title';

interface PostDetailProps {
  id: string;
  status: PostStatus;
  readOnly?: boolean;
}
const PostDetail: FunctionComponent<PostDetailProps> = ({
  id,
  status,
  readOnly,
}) => {
  const {
    data: { content, url, title },
  } = usePostDetail({ id, status });

  return (
    <div className="mx-auto flex-1">
      <PostTitle initialTitle={title} readOnly />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          typography({ scale: 'body-6' }),
          'ml-2 break-all text-gray-100',
        )}
      >
        {url}
      </a>
      <Editor markdown={content} readOnly={readOnly} />
    </div>
  );
};

export default PostDetail;
