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
          <svg
            className="h-4 w-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chip;
