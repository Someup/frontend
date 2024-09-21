'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useSummaryResult } from '@/lib/service/summary/useSummaryService';
import { type MDXEditorMethods } from '@mdxeditor/editor';

const Editor = dynamic(() => import('@/components/editor/Editor'), {
  ssr: false,
});

const SummaryResult = ({ id }: { id: string }) => {
  const {
    data: { content },
  } = useSummaryResult({ id });

  const editorRef = useRef<MDXEditorMethods>(null);

  return (
    <div>
      <Editor markdown={content} ref={editorRef} />
    </div>
  );
};

export default SummaryResult;
