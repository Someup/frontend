import ClosOutlined from '@/components/icons/CloseOutlined';
import { cn } from '@/lib/utils';
import React from 'react';

export interface IChipProps extends React.ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  selected?: boolean;
}
const Chip = ({
  children,
  onClose,
  className,
  selected,
  ...props
}: IChipProps): React.JSX.Element => {
  return (
    <div
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-5 bg-gray-30 px-4 py-1 text-primary-400 hover:shadow-inner hover:shadow-primary-400',
        onClose && 'pr-3',
        selected && 'bg-gray-200',
        className,
      )}
      {...props}
    >
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="focus:ring-tertiary ml-0.5 rounded-full p-1 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-1"
        >
          <ClosOutlined className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Chip;
