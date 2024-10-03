/* eslint-disable @rushstack/typedef-var */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const textButtonVariants = cva(
  `rounded-2 flex items-center justify-center whitespace-nowrap ring-tertiary transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none p-2.5 text-black disabled:text-gray-100`,
  {
    variants: {
      size: {
        lg: 'py-3 px-5',
        md: 'py-2 px-3',
        sm: 'py-1 px-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface ITextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textButtonVariants> {
  asChild?: boolean;
}

const TextButton: React.ForwardRefExoticComponent<
  ITextButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, ITextButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          textButtonVariants({ className, size }),
          typography({
            scale:
              size === 'lg' ? 'body-1' : size === 'sm' ? 'body-6' : 'body-2',
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
TextButton.displayName = 'TextButton';

export default TextButton;
