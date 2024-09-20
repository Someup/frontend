'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const Label: React.ForwardRefExoticComponent<
  Omit<
    LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>,
    'ref'
  > &
    React.RefAttributes<HTMLLabelElement>
> = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      typography({ scale: 'body-4' }),
      'text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
