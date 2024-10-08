'use client';
import { FunctionComponent, useState, useRef } from 'react';
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
import PostTitle from '@/components/post/post-title';
import PostTags from '@/components/post/post-tags';
import { DialogTrigger, Dialog } from '@/components/ui/Dialog';
import SavePostDialog from '@/components/post/post-save-dialog';
import { useRouter } from 'next/navigation';

interface PostEditorProps {
  id: string;
  status: PostStatus;
}

const PostEditor: FunctionComponent<PostEditorProps> = ({ id, status }) => {
  const {
    data: { content, title, tagList },
  } = usePostDetail({ id, status });
  const { mutate: updatePostMutate } = useUpdatePostMutation();
  const titleRef = useRef<{ getTitle: () => string }>(null);
  const tagListRef = useRef<{ getTagList: () => string[] }>(null);

  const editorRef = useRef<MDXEditorMethods>(null);

  const [textLength, setTextLength] = useState(content.trim().length);

  const [fold, setFold] = useState(false);

  const router = useRouter();

  const updatePost = (archiveId: number) => {
    const newTitle = titleRef.current?.getTitle() ?? '';
    updatePostMutate(
      {
        id,
        body: {
          title: newTitle,
          content: editorRef.current?.getMarkdown().trim() ?? '',
          tagList: tagListRef.current?.getTagList() ?? [],
          memo: null,
          archiveId: archiveId === -1 ? null : archiveId,
        },
      },
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            console.error(error);
          }
        },
        onSuccess: () => {
          router.push('/archive');
        },
      },
    );
  };

  const handleChange = (value: string) => {
    setTextLength(value.trim().length);
  };

  const toggleFold = () => {
    setFold(!fold);
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
          <PostTitle initialTitle={title} ref={titleRef} readOnly={false} />
          <PostTags
            initialTagList={tagList}
            ref={tagListRef}
            className="mb-4 ml-10"
          />
          <Editor
            markdown={content}
            ref={editorRef}
            onChange={handleChange}
            className="flex flex-grow basis-0 flex-col px-4"
          />
          <div className="flex-shrink-0 bg-white p-5">
            <div className="flex flex-col items-end gap-4">
              <span className="text-gray-600">{`${textLength}/5000`}</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" type="button" variant="filled">
                    저장하기
                  </Button>
                </DialogTrigger>
                <SavePostDialog onSubmit={updatePost} />
              </Dialog>
            </div>
          </div>
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
            <PostTitle initialTitle={title} ref={titleRef} readOnly />
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
