/* eslint-disable @rushstack/typedef-var */
import { cva, type VariantProps } from 'class-variance-authority';
export const typography = cva('', {
  variants: {
    scale: {
      'head-1': 'text-3xl font-semibold leading-1.3 tracking-wider',
      'title-1': 'text-2xl font-semibold leading-1.4 tracking-normal',
      'title-2': 'text-xl font-semibold leading-1.5 tracking-normal',
      'title-3': 'text-lg font-semibold leading-1.5 tracking-normal',
      'body-1': 'text-2xl font-regular leading-1.5 tracking-normal',
      'body-2': 'text-xl font-regular leading-1.2 tracking-normal',
      'body-3': 'text-lg font-regular leading-1.5 tracking-normal',
      'body-4': 'text-base font-regular leading-1.5 tracking-normal',
      'body-5': 'text-sm font-regular leading-1.5 tracking-normal',
      'body-6': 'text-xs font-regular leading-1.6 tracking-normal',
    },
  },
  defaultVariants: {
    scale: 'body-4',
  },
});

export type Typography = VariantProps<typeof typography>;
