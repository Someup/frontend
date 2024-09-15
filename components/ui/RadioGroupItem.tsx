import React from 'react';
import {
  Item,
  type RadioGroupItemProps,
  Indicator,
} from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

const RadioGroupItem: React.ForwardRefExoticComponent<
  Omit<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, 'ref'> &
    React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return (
    <Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-gray-100 bg-white text-primary ring-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary',
        className,
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-white" />
      </Indicator>
    </Item>
  );
});
RadioGroupItem.displayName = Item.displayName;
export default RadioGroupItem;
