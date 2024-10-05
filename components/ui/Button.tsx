/* eslint-disable @rushstack/typedef-var */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  `flex items-center justify-center whitespace-nowrap text-white  ring-tertiary transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        filled:
          'rounded-2 bg-primary-400 disabled:bg-gray-100 active:bg-tertiary hover:bg-primary-600 active:bg-primary-800',
        outlined:
          'rounded-2 shadow-[inset_0_0_0_4px_rgba(0,0,0,1)] shadow-primary-400 text-primary-400 hover:text-primary-600 active:text-primary-800 active:shadow-primary-800 disabled:shadow-gray-100 disabled:text-gray-100',
        rounded:
          'bg-primary-400 disabled:bg-gray-100 active:bg-tertiary hover:bg-primary-600 active:bg-primary-800 rounded-12',
        icon: 'rounded-2 hover:bg-gray-100/40 text-black disabled:text-gray-400',
      },
      size: {
        md: 'py-2 px-3',
        lg: 'py-3 px-5',
        square: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  },
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: React.ForwardRefExoticComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className, size }),
          typography({ scale: size === 'lg' ? 'body-4' : 'body-6' }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
