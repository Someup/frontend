import ClosOutlined from '@/components/icons/CloseOutlined';
import { cn } from '@/lib/utils';
import React from 'react';

export interface IChipProps extends React.ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
}
const Chip = ({
  children,
  onClose,
  className,
  ...props
}: IChipProps): React.JSX.Element => {
  return (
    <div
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-5 bg-white px-3 py-1 text-gray-700 shadow-inner shadow-gray-700',
        onClose && 'pl-4',
        className,
      )}
      {...props}
    >
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 rounded-full p-1 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-tertiary"
        >
          <ClosOutlined className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Chip;
