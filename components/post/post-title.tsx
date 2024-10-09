import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostSchema, postSchema } from '@/lib/service/post/constraints';
import { useToast } from '@/components/hooks/use-toast';

interface TitleInputProps {
  initialTitle: string;
  readOnly: boolean;
}

const PostTitle = forwardRef<{ getTitle: () => string }, TitleInputProps>(
  ({ initialTitle, readOnly = false }, ref) => {
    const { toast, dismiss } = useToast();
    const {
      register,
      getValues,
      formState: { errors },
      setValue,
    } = useForm<PostSchema>({
      resolver: zodResolver(postSchema),
      defaultValues: {
        title: initialTitle,
      },
      mode: 'onChange',
    });

    useImperativeHandle(ref, () => ({
      getTitle: () => getValues('title'),
    }));

    useEffect(() => {
      if (errors.title) {
        toast({
          description: errors.title.message,
          variant: 'destructive',
        });
        const title = getValues('title');
        if (errors.title && title.length > 100) {
          setValue('title', title.slice(0, 100), {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      } else {
        dismiss();
      }
    }, [errors.title, setValue, toast]);

    if (readOnly) {
      return (
        <div className="flex flex-shrink-0 items-center justify-center p-4">
          <h1 className="text-center text-3xl font-semibold">{initialTitle}</h1>
        </div>
      );
    }

    return (
      <div className="flex flex-shrink-0 items-center justify-center p-4">
        <div className="flex flex-col">
          <input
            {...register('title')}
            placeholder="제목을 입력하세요"
            className="flex-1 bg-transparent text-center text-3xl font-semibold"
          />
        </div>
      </div>
    );
  },
);

PostTitle.displayName = 'PostTitle';

export default PostTitle;
