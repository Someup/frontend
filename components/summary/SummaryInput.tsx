'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { createSummary } from '@/lib/service/summary/summaryService';

const SummaryInput = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: createSummary,
    onSuccess: (postId: number) => {
      router.push(`/result/${postId}`);
    },
  });

  const handleSummary = () => {
    const isValidUrl = isValidURL(url);
    if (!isValidUrl) {
      alert('올바른 URL을 입력해주세요.');
      return;
    }
    mutate({
      url,
      options: { level: 'brief', tone: 'formalTone', language: 'kr' },
    });
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSummary();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <input
        type="url"
        placeholder="URL을 입력해주세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSummary} disabled={isPending}>
        {isPending ? '요약 중...' : '요약하기'}
      </button>
    </>
  );
};

export default SummaryInput;

function isValidURL(url: string) {
  const urlPattern =
    /^(https?:\/\/)((([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z0-9%_.~+]*)*(\?[;&a-zA-Z0-9%_.~+=-]*)?(#[-a-zA-Z0-9_]*)?$/i;
  return urlPattern.test(url);
}
