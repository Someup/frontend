import React, { useId } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const RadioGroup: React.FunctionComponent<RadixRadioGroup.RadioGroupProps> = ({
  value,
  onValueChange,
  children,
  orientation = 'vertical',
  className,
  ...props
}) => {
  return (
    <RadixRadioGroup.Root
      className={cn(
        'flex gap-2',
        orientation === 'horizontal' ? '' : 'flex-col',
        className,
      )}
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

const RadioGroupItem: React.FunctionComponent<
  RadixRadioGroup.RadioGroupItemProps
> = ({ value, children, className, ...props }) => {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <RadixRadioGroup.Item
        className={cn(
          'box-border flex h-4 w-4 items-center justify-center rounded-full border border-gray-100 data-[state=checked]:border-none data-[state=checked]:bg-primary',
          className,
        )}
        value={value}
        id={id}
        {...props}
      >
        <RadixRadioGroup.Indicator className="h-2 w-2 rounded-full bg-white" />
      </RadixRadioGroup.Item>
      <label className={typography({ scale: 'body-4' })} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export { RadioGroup, RadioGroupItem };
