import { forwardRef, useImperativeHandle, useState, ChangeEvent } from 'react';

interface TitleInputProps {
  initialTitle: string;
  readOnly: boolean;
}

const PostTitle = forwardRef<{ getTitle: () => string }, TitleInputProps>(
  ({ initialTitle, readOnly = false }, ref) => {
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

    if (readOnly) {
      return (
        <div className="flex flex-shrink-0 items-center justify-center p-4">
          <h1 className="text-center text-3xl font-semibold">{title}</h1>
        </div>
      );
    }

    return (
      <div className="flex flex-shrink-0 items-center justify-center p-4">
        <div className="flex flex-col">
          <input
            value={title}
            onChange={handleTitleChange}
            className="flex-1 bg-transparent text-center text-3xl font-semibold"
            onBlur={handleBlur}
          />
          {showError && (
            <p className="text-error-400">
              제목은 2자 이상 30자 이하여야 합니다.
            </p>
          )}
        </div>
      </div>
    );
  },
);

PostTitle.displayName = 'PostTitle';

export default PostTitle;
