'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { createSummary } from '@/lib/service/summary/summaryService';
import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

  const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      handleSummary();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUrl(e.target.value);
  };

  const currentOptions = '상세 요약, 비공식적 말투, 기본값(한국어)';

  return (
    <div className="absolute bottom-0 left-1/2 mx-auto w-full max-w-[73.89%] -translate-x-1/2 -translate-y-1/2 transform">
      <button
        type="button"
        className={cn(
          typography({ scale: 'body-3' }),
          'ml-auto mr-8 flex items-center gap-2 text-white',
        )}
      >
        <Image src="/option_icon.svg" width={20} height={20} alt="option" />
        설정
      </button>
      <TextField
        placeholder="URL을 입력해주세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-end justify-between">
          <span
            className={cn(
              typography({ scale: 'body-4' }),
              'flex-shrink-0 text-gray-800',
            )}
          >
            {currentOptions}
          </span>
          <Button
            variant="filled"
            onClick={handleSummary}
            disabled={isPending}
            className="rounded-11"
          >
            요약하기
          </Button>
        </div>
      </TextField>
    </div>
  );
};

export default SummaryInput;

function isValidURL(url: string) {
  const urlPattern =
    /^(https?:\/\/)((([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z0-9%_.~+]*)*(\?[;&a-zA-Z0-9%_.~+=-]*)?(#[-a-zA-Z0-9_]*)?$/i;
  return urlPattern.test(url);
}
