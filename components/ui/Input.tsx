/* eslint-disable @rushstack/typedef-var */
import * as React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'ring-tertiary peer placeholder:tracking-normal placeholder:font-regular flex w-full rounded-2 bg-white shadow-inner shadow-gray-400 ring-offset-2  placeholder:text-gray-200 hover:shadow-primary-200 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:shadow-gray-200',
  {
    variants: {
      size: {
        lg: 'px-5 py-4 placeholder:text-xl placeholder:leading-1.2',
        md: 'px-4 py-2.5 placeholder:text-base placeholder:leading-1.5',
        sm: 'px-3 py-1.5 placeholder:text-xs placeholder:leading-1.6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ size, className }),
          typography({
            scale:
              size === 'lg' ? 'body-2' : size === 'sm' ? 'body-6' : 'body-4',
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
