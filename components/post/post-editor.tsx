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

  const updatePost = () => {
    const newTitle = titleRef.current?.getTitle() ?? '';
    updatePostMutate(
      {
        id,
        body: {
          title: newTitle,
          content: editorRef.current?.getMarkdown().trim() ?? '',
          tagList: tagListRef.current?.getTagList() ?? [],
          memo: null,
          archiveId: null,
        },
      },
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            console.error(error);
          }
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
    <div className="flex h-full flex-col">
      <div className="flex flex-grow overflow-hidden">
        <div
          className={cn(
            'flex h-full flex-col transition-all duration-500 ease-in-out',
            fold ? 'w-full' : 'w-1/2',
          )}
        >
          <div className="flex flex-shrink-0 items-center p-4">
            <PostTitle initialTitle={title} ref={titleRef} />
            <Button
              type="button"
              variant="icon"
              aria-label="접기"
              onClick={toggleFold}
              className="ml-2"
            >
              <FoldIcon className={fold ? 'rotate-180' : ''} />
            </Button>
          </div>
          <PostTags initialTagList={tagList} ref={tagListRef} />
          <Editor
            markdown={content}
            ref={editorRef}
            onChange={handleChange}
            className="flex flex-grow basis-0 flex-col px-4"
          />
          <div className="flex-shrink-0 bg-white p-5">
            <div className="flex items-center justify-between">
              <span>{`${textLength}/5000`}</span>
              <Button type="button" variant="filled" onClick={updatePost}>
                저장하기
              </Button>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col bg-gray-50 transition-all duration-500 ease-in-out',
            fold ? 'w-0' : 'w-1/2',
            'overflow-hidden',
          )}
        >
          <div
            className={cn(
              'transition-opacity duration-500 ease-in-out',
              fold ? 'opacity-0' : 'opacity-100',
            )}
          >
            <div className="p-4">
              <h2 className="text-3xl font-semibold">{title}</h2>
            </div>
            <Editor
              markdown={content}
              readOnly
              className="flex-grow basis-0 overflow-y-auto px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
