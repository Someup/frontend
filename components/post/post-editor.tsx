'use client';
import { FunctionComponent, useState, ChangeEvent, useRef } from 'react';
import { AxiosError } from 'axios';
import {
  usePostDetail,
  useUpdatePostMutation,
} from '@/lib/service/post/use-post-service';
import Editor from '@/components/editor/editor';
import Button from '@/components/ui/Button';
import Chip from '@/components/ui/Chip';
import FoldIcon from '@/assets/unfold.svg';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';
import { PostStatus } from '@/types/post-types';
import PostTitle from '@/components/post/post-title';

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

  const [newTagList, setNewTagList] = useState(tagList);
  const [newTag, setNewTag] = useState('');

  const editorRef = useRef<MDXEditorMethods>(null);

  const [textLength, setTextLength] = useState(content.trim().length);

  const [fold, setFold] = useState(false);

  const deleteTag = (tag: string) => {
    setNewTagList(newTagList.filter((t) => t !== tag));
  };

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const addNewTag = () => {
    if (!newTag || newTagList.length >= 5) {
      return;
    }
    if (newTagList.includes(newTag)) {
      setNewTag('');
      return;
    }
    setNewTagList([...newTagList, newTag]);
    setNewTag('');
  };

  const updatePost = () => {
    const newTitle = titleRef.current?.getTitle() ?? '';
    updatePostMutate(
      {
        id,
        body: {
          title: newTitle,
          content: editorRef.current?.getMarkdown().trim() ?? '',
          tagList: newTagList,
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

  const isInsertTagEnable = newTagList.length < 5;

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
          <div className="mb-4 flex flex-wrap gap-2 px-4">
            {newTagList.map((tag) => (
              <Chip key={tag} onClose={() => deleteTag(tag)}>
                {tag}
              </Chip>
            ))}
            {isInsertTagEnable && (
              <input
                type="text"
                placeholder="태그를 입력하세요"
                value={newTag}
                onKeyDown={(e) => e.key === 'Enter' && addNewTag()}
                onChange={handleTagChange}
                onBlur={addNewTag}
                className="px-2 py-1"
              />
            )}
          </div>
          <Editor
            markdown={content}
            ref={editorRef}
            onChange={handleChange}
            className="flex-grow basis-0 overflow-y-auto px-4"
          />
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
      <div className="flex-shrink-0 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span>{`${textLength}/5000`}</span>
          <Button type="button" variant="filled" onClick={updatePost}>
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
