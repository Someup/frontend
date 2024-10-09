'use client';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';

const Dialog: React.FC<DialogPrimitive.DialogProps> = DialogPrimitive.Root;

const DialogTrigger: React.ForwardRefExoticComponent<
  DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
> = DialogPrimitive.Trigger;

const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps> =
  DialogPrimitive.Portal;

const DialogClose: React.ForwardRefExoticComponent<
  DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>
> = DialogPrimitive.Close;

const DialogOverlay: React.ForwardRefExoticComponent<
  Omit<
    DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>,
    'ref'
  > &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/50', className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent: React.ForwardRefExoticComponent<
  Omit<
    DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>,
    'ref'
  > &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-8 whitespace-pre-wrap rounded-2 bg-white px-8 py-8',
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader: {
  ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
  displayName: string;
} = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col items-center gap-4 text-center', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter: {
  ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
  displayName: string;
} = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex justify-center gap-4', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle: React.ForwardRefExoticComponent<
  Omit<
    DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>,
    'ref'
  > &
    React.RefAttributes<HTMLHeadingElement>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(typography({ scale: 'title-2' }), 'text-black', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription: React.ForwardRefExoticComponent<
  Omit<
    DialogPrimitive.DialogDescriptionProps &
      React.RefAttributes<HTMLParagraphElement>,
    'ref'
  > &
    React.RefAttributes<HTMLParagraphElement>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      'items-center text-gray-500',
      typography({ scale: 'body-4' }),
      className,
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
