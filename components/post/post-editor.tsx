'use client';
import Editor from '@/components/editor/editor';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { FunctionComponent } from 'react';

interface PostEditorProps {
  id: string;
}
const PostEditor: FunctionComponent<PostEditorProps> = ({ id }) => {
  const {
    data: { content },
  } = usePostDetail({ id });

  return (
    <>
      <Editor markdown={content} readOnly />
      <Editor markdown={content} />
    </>
  );
};

export default PostEditor;
