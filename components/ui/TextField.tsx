import React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const TextField = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn('relative mx-auto flex h-56 p-1', className)}>
      <div className="via-34% absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#A9FFA9] from-0% via-[#5C80DE] to-[#2C31FF] to-100%" />
      <div className="relative flex flex-1 flex-col rounded-[33px] bg-white p-7">
        <textarea
          className={cn(
            typography({ scale: 'body-4' }),
            'flex-1 resize-none text-gray-600 outline-none',
            className,
          )}
          ref={ref}
          {...props}
        />
        {children}
      </div>
    </div>
  );
});

TextField.displayName = 'TextArea';

export default TextField;
