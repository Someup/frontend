import { FunctionComponent, ReactNode } from 'react';

interface PostLayoutProps {
  children: ReactNode;
}

const PostsLayout: FunctionComponent<PostLayoutProps> = ({ children }) => {
  return <div className="flex h-full w-full flex-col pt-17">{children}</div>;
};

export default PostsLayout;
