import { forwardRef, useImperativeHandle, useState, ChangeEvent } from 'react';

interface TitleInputProps {
  initialTitle: string;
}

const PostTitle = forwardRef<{ getTitle: () => string }, TitleInputProps>(
  ({ initialTitle }, ref) => {
    const [title, setTitle] = useState(initialTitle);
    const [showError, setShowError] = useState(false);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const handleBlur = () => {
      setShowError(title.length < 2 || title.length > 30);
    };

    useImperativeHandle(ref, () => ({
      getTitle: () => title,
    }));

    return (
      <div className="flex flex-col">
        <input
          value={title}
          onChange={handleTitleChange}
          className="flex-1 text-3xl font-semibold"
          onBlur={handleBlur}
        />
        {showError && (
          <p className="text-error">제목은 2자 이상 30자 이하여야 합니다.</p>
        )}
      </div>
    );
  },
);

PostTitle.displayName = 'PostTitle';

export default PostTitle;
