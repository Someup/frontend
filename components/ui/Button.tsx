/* eslint-disable @rushstack/typedef-var */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  `flex items-center justify-center whitespace-nowrap text-white  ring-tertiary transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none `,
  {
    variants: {
      variant: {
        filled:
          'px-9.5 py-3 rounded-2 bg-primary disabled:bg-gray-100 active:bg-tertiary hover:bg-primary/90',
        outlined:
          'px-8.5 py-2 rounded-2 bg-white text-primary border-4 border-primary disabled:border-gray-100 disabled:text-gray-100 active:border-tertiary active:text-tertiary hover:bg-gray-100/50',
        rounded:
          'px-9.5 py-3 rounded-12 bg-primary disabled:bg-gray-100 active:bg-tertiary hover:bg-primary',
        icon: 'p-2 rounded-2 hover:bg-gray-100/40 text-black disabled:text-gray-400',
        text: 'p-2.5 rounded-2 bg-transparent hover:bg-gray-100/40 text-black disabled:text-gray-400',
      },
    },
    defaultVariants: {
      variant: 'filled',
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
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className }),
          typography({ scale: 'title-2' }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
