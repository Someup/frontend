import React, { useId } from 'react';
import { Item, Indicator } from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import Label from '@/components/ui/Label';

interface IProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'> {
  value: string;
}

const RadioGroupItem = ({
  className,
  value,
  children,
  ...props
}: IProps): React.JSX.Element => {
  const id = useId();
  const itemId = `radio-item-${id}`;
  return (
    <div className={cn('flex items-center', className)} {...props}>
      <Item
        id={itemId}
        className="focus-visible:ring-tertiary aspect-square h-4 w-4 rounded-full border border-gray-100 bg-white text-primary-400 ring-offset-2 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-400 data-[state=checked]:bg-primary-400"
        value={value}
      >
        <Indicator className="flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-white" />
        </Indicator>
      </Item>
      <Label htmlFor={itemId} className="ml-2">
        {children}
      </Label>
    </div>
  );
};
RadioGroupItem.displayName = Item.displayName;
export default RadioGroupItem;
