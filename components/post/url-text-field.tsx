'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { typography } from '@/styles/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from '@/components/ui/Dialog';
import OptionDialog from '@/components/summary/option-dialog';
import { SummaryOptions } from '@/types/summary-types';
import {
  SummaryLanguageLabels,
  SummaryLevelLabels,
  SummaryToneLabels,
} from '@/constants/SummaryOptionLabels';
import { useCreatePostMutation } from '@/lib/service/post/use-post-service';

const URLTextField = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState<SummaryOptions>({
    level: 'base',
    tone: 'casual',
    language: 'kr',
  });
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const handleConfirm = (options: SummaryOptions) => {
    setOptions(options);
  };

  const { mutate, isPending } = useCreatePostMutation();

  const handleSummary = () => {
    const isValidUrl = isValidURL(url);
    if (!isValidUrl) {
      setIsErrorDialogOpen(true);
      return;
    }
    mutate({
      url,
      options,
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

  const currentOptions = `${SummaryLevelLabels[options.level]}, ${SummaryToneLabels[options.tone]}, ${SummaryLanguageLabels[options.language]}`;

  return (
    <div className="mx-auto w-full max-w-[912px] p-4">
      <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
        <DialogContent className="text-center">
          유효하지 않은 형식의 URL 입니다.
          <DialogFooter>
            <Button size="lg" onClick={() => setIsErrorDialogOpen(false)}>
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
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
        </DialogTrigger>
        <OptionDialog onConfirm={handleConfirm} />
      </Dialog>
      <TextField
        placeholder="URL을 입력해주세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="mt-3.5"
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
            variant="rounded"
            size="lg"
            onClick={handleSummary}
            disabled={isPending}
          >
            요약하기
          </Button>
        </div>
      </TextField>
    </div>
  );
};

export default URLTextField;

function isValidURL(url: string) {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/g;
  return urlPattern.test(url);
}
