'use client';
import Editor from '@/components/editor/editor';
import Chip from '@/components/ui/Chip';
import Input from '@/components/ui/Input';
import { usePostDetail } from '@/lib/service/post/use-post-service';
import { FunctionComponent, useState, ChangeEvent } from 'react';

interface PostEditorProps {
  id: string;
}
const PostEditor: FunctionComponent<PostEditorProps> = ({ id }) => {
  const {
    data: { content, title, tagList },
  } = usePostDetail({ id });

  const [newTitle, setNewTitle] = useState(title);
  const [newTagList, setNewTagList] = useState(tagList);
  const [newTag, setNewTag] = useState('');

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

  const isInsertTagEnable = newTagList.length < 5;

  return (
    <>
      <Editor markdown={content} readOnly />
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
        <Editor markdown={content} />
      </div>
    </>
  );
};

export default PostEditor;
