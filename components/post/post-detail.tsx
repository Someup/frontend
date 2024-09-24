'use client';
import { FunctionComponent, useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

interface PostDetailProps {
  id: string;
  readOnly?: boolean;
}

const Editor = dynamic(() => import('@/components/editor/Editor'), {
  ssr: false,
});

const PostDetail: FunctionComponent<PostDetailProps> = ({ id, readOnly }) => {
  const {
    data: { content, url },
  } = usePostDetail({ id });

  const editorRef = useRef<MDXEditorMethods>(null);
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
      <Editor markdown={content} ref={editorRef} readOnly={readOnly} />
    </div>
  );
};

export default PostDetail;
