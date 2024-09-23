import { FunctionComponent, ReactNode } from 'react';
import Header from '@/components/header/Header';

interface SummaryLayoutProps {
  children: ReactNode;
}

const SummaryLayout: FunctionComponent<SummaryLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div style={{ padding: '0 10%' }}>{children}</div>
    </div>
  );
};

export default SummaryLayout;
