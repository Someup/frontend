import { FunctionComponent, ReactNode } from 'react';

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout: FunctionComponent<PostLayoutProps> = ({ children }) => {
  return <div className="mt-17 flex h-full w-full flex-col">{children}</div>;
};

export default PostLayout;
