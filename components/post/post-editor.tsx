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
import Input from '@/components/ui/Input';
import FoldIcon from '@/assets/unfold.svg';
import { type MDXEditorMethods } from '@mdxeditor/editor';
import { cn } from '@/lib/utils';

interface PostEditorProps {
  id: string;
}
const PostEditor: FunctionComponent<PostEditorProps> = ({ id }) => {
  const {
    data: { content, title, tagList },
  } = usePostDetail({ id });
  const { mutate: updatePostMutate } = useUpdatePostMutation();

  const [newTitle, setNewTitle] = useState(title);
  const [newTagList, setNewTagList] = useState(tagList);
  const [newTag, setNewTag] = useState('');

  const editorRef = useRef<MDXEditorMethods>(null);

  const [textLength, setTextLength] = useState(content.trim().length);

  const [fold, setFold] = useState(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

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
    <>
      <div className="flex flex-col items-stretch">
        <Button
          type="button"
          variant="icon"
          aria-label="접기"
          onClick={toggleFold}
        >
          <FoldIcon />
        </Button>
        <Editor
          markdown={content}
          readOnly
          className={cn(
            'transition-all duration-500 ease-in-out',
            fold ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100',
          )}
        />
      </div>
      <div>
        <Input value={newTitle} onChange={handleTitleChange} />
        <div>
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
            />
          )}
        </div>
        <Editor markdown={content} ref={editorRef} onChange={handleChange} />
        <span>{`${textLength}/5000`}</span>
        <Button
          type="button"
          variant="filled"
          onClick={updatePost}
          className="ml-auto"
        >
          저장하기
        </Button>
      </div>
    </>
  );
};

export default PostEditor;
