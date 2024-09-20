import React from 'react';
import { type RadioGroupProps, Root } from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

const RadioGroup: React.ForwardRefExoticComponent<
  Omit<RadioGroupProps & React.RefAttributes<HTMLDivElement>, 'ref'> &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return <Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = Root.displayName;

export default RadioGroup;
