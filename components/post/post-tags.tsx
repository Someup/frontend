import Chip from '@/components/ui/Chip';
import React, {
  ChangeEvent,
  forwardRef,
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
            onKeyDown={(e) => e.key === 'Enter' && addNewTag()}
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
