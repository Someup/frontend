import React from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { cn } from '@/lib/utils';

const ToolbarToggleGroup = ToolbarPrimitive.ToolbarToggleGroup;

const ToolbarToggleItem = React.forwardRef<
  HTMLButtonElement,
  ToolbarPrimitive.ToolbarToggleItemProps
>(({ className, ...props }, forwardedRef) => (
  <ToolbarPrimitive.ToolbarToggleItem
    className={cn(className, 'data-[state=on]:bg-gray-100')}
    {...props}
    ref={forwardedRef}
  />
));

ToolbarToggleItem.displayName = 'ToolbarToggleItem';

const ToolbarButton = ToolbarPrimitive.ToolbarButton;

export { ToolbarToggleGroup, ToolbarToggleItem, ToolbarButton };
