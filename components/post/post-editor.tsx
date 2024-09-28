'use client';
import Editor from '@/components/editor/editor';
import Input from '@/components/ui/Input';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { FunctionComponent, useState, ChangeEvent } from 'react';

interface PostEditorProps {
  id: string;
}
const PostEditor: FunctionComponent<PostEditorProps> = ({ id }) => {
  const {
    data: { content, title },
  } = usePostDetail({ id });

  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  return (
    <>
      <Editor markdown={content} readOnly />
      <div>
        <Input value={newTitle} onChange={handleTitleChange} />
        <Editor markdown={content} />
      </div>
    </>
  );
};

export default PostEditor;
