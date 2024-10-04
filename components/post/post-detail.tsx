'use client';
import { FunctionComponent } from 'react';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Editor from '@/components/editor/editor';

interface PostDetailProps {
  id: string;
  readOnly?: boolean;
}
const PostDetail: FunctionComponent<PostDetailProps> = ({ id, readOnly }) => {
  const {
    data: { content, url },
  } = usePostDetail(id);

  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          typography({ scale: 'body-4' }),
          'm-15 block break-all text-gray-100',
        )}
      >
        {url}
      </a>
      <Editor markdown={content} readOnly={readOnly} />
    </div>
  );
};

export default PostDetail;
