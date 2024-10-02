/* eslint-disable @rushstack/typedef-var */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import React from 'react';

interface ErrorMessageProps extends React.ComponentPropsWithoutRef<'p'> {
  size?: 'sm' | 'md' | 'lg';
}

const ErrorMessage = React.forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-error-400',
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

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
