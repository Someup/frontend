/* eslint-disable @rushstack/typedef-var */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import React from 'react';

interface DescriptionProps extends React.ComponentPropsWithoutRef<'p'> {
  size?: 'sm' | 'md' | 'lg';
}

const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-black',
          typography({
            scale:
              size === 'lg' ? 'body-3' : size === 'sm' ? 'body-6' : 'body-5',
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Description.displayName = 'Description';

export default Description;
