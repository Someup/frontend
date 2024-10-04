/* eslint-disable @rushstack/typedef-var */
'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipArrow = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>) => (
  <TooltipPrimitive.Arrow
    {...props}
    className={cn('h-2 w-4 fill-gray-50', className)}
  />
);

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <TooltipPortal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 max-w-[320px] overflow-hidden rounded-2 bg-gray-50 p-3 text-center text-black shadow-[0_8px_16px_0_rgba(0,0,0,0.16)]',
        typography({ scale: 'body-6' }),
        className,
      )}
      {...props}
    >
      {children}
      <TooltipArrow />
    </TooltipPrimitive.Content>
  </TooltipPortal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPortal,
  TooltipArrow,
};
