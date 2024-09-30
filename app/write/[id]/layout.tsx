import React, { FunctionComponent, ReactNode } from 'react';

interface WriteLayoutProps {
  children: ReactNode;
}

const WriteLayout: FunctionComponent<WriteLayoutProps> = ({ children }) => {
  return <div className="h-screen">{children}</div>;
};

export default WriteLayout;
