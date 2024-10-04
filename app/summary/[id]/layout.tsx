import { FunctionComponent, ReactNode } from 'react';

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout: FunctionComponent<PostLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div style={{ padding: '0 10%' }}>{children}</div>
    </div>
  );
};

export default PostLayout;
