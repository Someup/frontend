/* eslint-disable @rushstack/typedef-var */
'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  size?: 'sm' | 'md' | 'lg';
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size = 'md', ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      typography({
        scale: size === 'sm' ? 'body-6' : size === 'md' ? 'body-5' : 'body-3',
      }),
      'text-black',
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
