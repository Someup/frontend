import { FunctionComponent, ReactNode } from 'react';
import Header from '@/components/header/Header';

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout: FunctionComponent<PostLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div style={{ padding: '0 10%' }}>{children}</div>
    </div>
  );
};

export default PostLayout;
