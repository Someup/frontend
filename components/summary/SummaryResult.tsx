'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useSummaryResult } from '@/lib/service/summary/useSummaryService';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import SummarySaveButton from '@/components/summary/SummarySaveButton';
import SummaryFeedbackBox from '@/components/summary/SummaryFeedbackBox';

const Editor = dynamic(() => import('@/components/editor/Editor'), {
  ssr: false,
});

const SummaryResult = ({ id }: { id: string }) => {
  const {
    data: { content, url },
  } = useSummaryResult({ id });

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
      <div className="relative">
        <SummarySaveButton />
        <SummaryFeedbackBox />
      </div>
    </div>
  );
};

export default SummaryResult;
