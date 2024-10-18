'use client';
import Chip from '@/components/ui/Chip';
import React, {
  ChangeEvent,
  forwardRef,
  KeyboardEvent,
  useImperativeHandle,
  useState,
} from 'react';

interface PostTagsProps {
  initialTagList?: string[];
  editable?: boolean;
  className?: string;
}
const PostTags = forwardRef<{ getTagList: () => string[] }, PostTagsProps>(
  ({ initialTagList = [], editable = true, className }, ref) => {
    const [tagList, setTagList] = useState<string[]>(initialTagList);
    const [tag, setTag] = useState('');
    const isInsertTagEnable = tagList.length < 5 && editable;

    const deleteTag = (tag: string) => {
      setTagList(tagList.filter((t) => t !== tag));
    };

    const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTag(e.target.value);
    };

    const addNewTag = () => {
      if (!tag || !isInsertTagEnable) {
        return;
      }
      if (tagList.includes(tag)) {
        setTag('');
        return;
      }
      setTagList([...tagList, tag]);
      setTag('');
    };
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      // e.isComposing이 true이면 IME 입력 중이므로, 이벤트를 무시합니다.
      if (e.key === 'Enter') {
        addNewTag();
      }
    };
    const preventDefault = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    };

    useImperativeHandle(ref, () => ({
      getTagList: () => tagList,
    }));

    return (
      <div className={`${className} flex flex-wrap gap-2`}>
        {tagList.map((tag) => (
          <Chip key={tag} onClose={editable ? () => deleteTag(tag) : undefined}>
            {tag}
          </Chip>
        ))}
        {isInsertTagEnable && (
          <input
            type="text"
            placeholder="태그를 입력하세요"
            value={tag}
            onKeyUp={handleKeyUp}
            onKeyDown={preventDefault}
            onChange={handleTagChange}
            onBlur={addNewTag}
            className="px-2 py-1"
          />
        )}
      </div>
    );
  },
);

PostTags.displayName = 'PostTags';

export default PostTags;
