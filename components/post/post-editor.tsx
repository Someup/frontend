'use client';
import {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  Suspense,
} from 'react';
import { AxiosError } from 'axios';
import {
  usePostDetail,
  useUpdatePostMutation,
} from '@/lib/service/post/use-post-service';
import Editor from '@/components/editor/editor';
import Button from '@/components/ui/Button';
import FoldIcon from '@/assets/unfold.svg';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';
import { PostStatus } from '@/types/post-types';
import PostTitleInput from '@/components/post/post-title-input';
import PostTags from '@/components/post/post-tags';
import { Dialog } from '@/components/ui/Dialog';
import SavePostDialog from '@/components/post/post-save-dialog';
import { useRouter } from 'next/navigation';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { useToast } from '@/components/hooks/use-toast';
import {
  POST_CONTENT_MAX_LENGTH,
  PostSchema,
  postSchema,
} from '@/lib/service/post/constraints';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserProfile } from '@/lib/service/user/use-user-service';
import LoginDialog from '@/components/auth/login-dialog';

interface PostEditorProps {
  id: string;
  status: PostStatus;
}

const PostEditor: FunctionComponent<PostEditorProps> = ({ id, status }) => {
  const {
    data: { content, title, tagList, archiveId, memoContent },
  } = usePostDetail({ id, status });
  const { mutate: updatePostMutate } = useUpdatePostMutation();
  const tagListRef = useRef<{ getTagList: () => string[] }>(null);
  const isLogin = useUserProfile().data !== undefined;

  const editorRef = useRef<MDXEditorMethods>(null);

  const [fold, setFold] = useState(false);

  const { toast, dismiss } = useToast();
  const {
    watch,
    control,
    register,
    getValues,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: title,
      content: content,
    },
    mode: 'onChange',
  });

  const textLength = watch('content').length;

  useEffect(() => {
    if (!errors.title) {
      dismiss();
    }
  }, [errors.title]);

  const router = useRouter();

  const updatePost = (archiveId: number) => {
    updatePostMutate(
      {
        id,
        body: {
          title: getValues('title'),
          content: editorRef.current?.getMarkdown().trim() ?? '',
          tagList: tagListRef.current?.getTagList() ?? [],
          memo: memoContent,
          archiveId: archiveId === -1 ? undefined : archiveId,
        },
      },
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            console.error(error);
          }
        },
        onSuccess: () => {
          if (status === 'draft') {
            router.push(`/archive?id=${archiveId}`);
          } else {
            router.push(`/posts/${id}`);
          }
        },
      },
    );
  };

  const toggleFold = () => {
    setFold(!fold);
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

  const onInvalid = (error: FieldErrors) => {
    if (error.title) {
      toast({
        description: error.title.message?.toString(),
        variant: 'destructive',
      });
      setFocus('title');
    }
    if (error.content) {
      toast({
        description: error.content.message?.toString(),
        variant: 'destructive',
      });
      setFocus('content');
    }
  };

  const onSubmit = () => {
    setDialogOpen(true); // 유효성 검사를 통과하면 다이얼로그 열기
  };

  return (
    <div className="flex h-full flex-col pt-15">
      <div className="flex flex-grow overflow-hidden">
        <div
          className={cn(
            'mx-auto flex h-full max-w-[960px] flex-col transition-all duration-500 ease-in-out',
            fold ? 'w-full' : 'w-1/2',
          )}
        >
          <div className="flex h-12 items-center">
            <Button
              type="button"
              variant="icon"
              aria-label="접기"
              onClick={toggleFold}
              className="ml-10 h-6 w-6 p-0"
            >
              <FoldIcon className={fold ? 'rotate-180' : ''} />
            </Button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="flex h-full flex-col"
          >
            <PostTitleInput register={register} />
            <PostTags
              initialTagList={tagList}
              ref={tagListRef}
              className="mb-4 ml-10"
            />
            <Controller
              name="content"
              control={control}
              defaultValue={content}
              render={({ field: { onChange, value } }) => (
                <Editor
                  markdown={value}
                  ref={editorRef}
                  onChange={onChange}
                  className="flex flex-grow basis-0 flex-col px-4"
                />
              )}
            />
            <div className="flex-shrink-0 bg-white p-5">
              <div className="flex flex-col items-end gap-4">
                <span
                  className={
                    errors.content?.message ? 'text-error-400' : 'text-gray-600'
                  }
                >{`${textLength}/${POST_CONTENT_MAX_LENGTH}`}</span>
                <Button size="lg" type="submit" variant="filled">
                  저장하기
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                  {isLogin ? (
                    <SavePostDialog
                      onSubmit={updatePost}
                      initialArchiveId={archiveId}
                    />
                  ) : (
                    <Suspense>
                      <LoginDialog />
                    </Suspense>
                  )}
                </Dialog>
              </div>
            </div>
          </form>
        </div>
        <div
          className={cn(
            'flex flex-col bg-gray-50 transition-all duration-500 ease-in-out',
            fold ? 'w-0 translate-x-full' : 'w-1/2 translate-x-0',
            'overflow-hidden',
          )}
        >
          <div
            className={cn(
              'flex h-full flex-col transition-opacity duration-500 ease-in-out',
              fold ? 'opacity-0' : 'opacity-100',
            )}
          >
            <div className="flex flex-shrink-0 items-center justify-center p-4">
              <h1 className="text-center text-3xl font-semibold">{title}</h1>
            </div>
            <Editor
              markdown={content}
              readOnly
              className="flex flex-grow basis-0 flex-col px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
