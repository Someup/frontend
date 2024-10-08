'use client';
import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useUpdateMemo } from '@/lib/service/post/use-post-service';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

interface MemoTextFieldProps {
  postId: string;
  initialMemo?: string;
  createdAt?: string;
}

const MemoTextField = ({
  postId,
  initialMemo = '',
  createdAt,
}: MemoTextFieldProps) => {
  const [memo, setMemo] = useState(initialMemo);
  const [isEditing, setIsEditing] = useState(false);
  const { mutate: updateMemoMutate } = useUpdateMemo();

  const updateMemo = () => {
    setIsEditing(false);
    updateMemoMutate({ postId, content: memo });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      updateMemo();
    }
  };

  const textFieldRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (isEditing) {
      updateMemo();
    } else {
      setIsEditing(true);
      textFieldRef.current?.focus();
    }
  };

  const buttonLabel = isEditing
    ? '수정 완료'
    : initialMemo
      ? '메모 수정'
      : '메모 등록';

  return (
    <div className="mt-7">
      <TextField
        placeholder="메모를 남겨보세요 :>"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={memo}
        className="w-full"
        ref={textFieldRef}
        readOnly={!isEditing}
      >
        <div className="flex w-full items-end justify-between">
          {createdAt && (
            <span
              className={cn(
                typography({ scale: 'body-4' }),
                'flex-shrink-0 text-gray-800',
              )}
            >
              {createdAt}
            </span>
          )}
          <Button
            variant="rounded"
            size="lg"
            onClick={handleClick}
            className="round-13"
          >
            {buttonLabel}
          </Button>
        </div>
      </TextField>
    </div>
  );
};

export default MemoTextField;
