'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const Editor = dynamic(() => import('@/components/editor/Editor'), {
  ssr: false,
});

const PostDetail = ({ id }: { id: string }) => {
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
      <span className={cn(typography({ scale: 'head-2' }))}>요약</span>
      <Editor markdown={content} ref={editorRef} readOnly />
    </div>
  );
};

export default PostDetail;
