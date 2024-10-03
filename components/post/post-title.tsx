import {
  forwardRef,
  useImperativeHandle,
  useState,
  ChangeEvent,
  Ref,
} from 'react';

interface TitleInputProps {
  initialTitle: string;
}

const PostTitle = forwardRef<{ getTitle: () => string }, TitleInputProps>(
  ({ initialTitle }, ref: Ref<{ getTitle: () => string }>) => {
    const [title, setTitle] = useState(initialTitle);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    useImperativeHandle(ref, () => ({
      getTitle: () => title,
    }));

    return (
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="flex-1 text-3xl font-semibold"
      />
    );
  },
);

PostTitle.displayName = 'PostTitle';

export default PostTitle;
