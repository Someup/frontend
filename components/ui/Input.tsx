import * as React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const Input: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<'input'>
> = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          typography({ scale: 'title-4' }),
          'flex w-full rounded-2 bg-white p-4 shadow-inner shadow-gray-400 ring-tertiary ring-offset-2 placeholder:text-lg placeholder:font-regular placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:shadow-none disabled:placeholder:text-gray-100',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
