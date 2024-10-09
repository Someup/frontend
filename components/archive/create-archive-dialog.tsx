import Button from '@/components/ui/Button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArchiveSchema,
  archiveSchema,
} from '@/lib/service/archive/constraints';
import { useCreateArchive } from '@/lib/service/archive/use-archive-service';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { AxiosError } from 'axios';
interface CreateArchiveDialogProps {
  onSuccess: (archiveName: string) => void;
}

export default function CreateArchiveDialog({
  onSuccess,
}: CreateArchiveDialogProps) {
  const createArchive = useCreateArchive();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ArchiveSchema>({
    resolver: zodResolver(archiveSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: ArchiveSchema) => {
    if (isSubmitting) return;
    await createArchive.mutateAsync(
      { name: values.name },
      {
        onSuccess: () => {
          reset();
          onSuccess(values.name);
        },
        onError: (error) => {
          console.error(error);
          if (error instanceof AxiosError) {
            alert('아카이브 추가 실패: ' + error.response?.data.message);
          }
        },
      },
    );
  };

  return (
    <DialogContent
      asChild
      onCloseAutoFocus={() => {
        reset();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader className="justify-center">
          <DialogTitle>새로운 아카이브 추가</DialogTitle>
          <DialogDescription className="sr-only">
            아카이브 제목을 입력하고 새로운 아카이브를 추가하세요!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1 px-6">
          <Input
            {...register('name')}
            placeholder="아카이브 제목을 입력해주세요."
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <DialogFooter className="justify-center">
          <Button size="lg" type="submit" disabled={isSubmitting}>
            {isSubmitting ? '추가 중...' : '추가하기'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
