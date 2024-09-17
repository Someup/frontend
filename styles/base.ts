/* eslint-disable @rushstack/typedef-var */
/* eslint-disable @typescript-eslint/naming-convention */
export const color = {
  primary: '#2C31FF',
  secondary: '#A9FFA9',
  tertiary: '#0D0F4D',
  error: '#EC0A0A',
  white: '#FFFFFF',
  'gray-50': '#EDEDED',
  'gray-100': '#D4D4D4',
  'gray-200': '#BABABA',
  'gray-300': '#A1A1A1',
  'gray-400': '#878787',
  'gray-500': '#6E6E6E',
  'gray-600': '#545454',
  'gray-700': '#3B3B3B',
  'gray-800': '#212121',
  'gray-900': '#080808',
  black: '#000000',
};

export const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
  '4xl': '2.375rem', // 38px
  '5xl': '3.75rem', // 60px
};

export const fontWeight = {
  regular: '400',
  semibold: '600',
};

export const lineHeight = {
  '1': '1', // 100%
  '1.1': '1.1', // 110%
  '1.2': '1.2', // 120%
  '1.3': '1.3', // 130%
  '1.4': '1.4', // 140%
  '1.5': '1.5', // 150%
  '1.6': '1.6', // 160%
};

export const letterSpacing = {
  tighter: '-.04em',
  tight: '-.02em',
  normal: '0',
  wide: '.02em',
  wider: '.04em',
};

export const spacing = {
  px: '1px',
  ...Array.from({ length: 100 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      acc[cur] = `${cur * 4}px`;
      return acc;
    },
    {} as Record<string, string>,
  ),
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

export const borderRadius = {
  ...Array.from({ length: 50 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      //use rem(16px = 1rem)
      acc[cur] = `${cur * 0.25}rem`;
      return acc;
    },
    {} as Record<string, string>,
  ),
  full: '9999px',
};

export const boxShadow = {
  inner: 'inset 0 0 0 1px rgba(0, 0, 0, 1)',
  'inner-2': 'inset 0 0 0 2px rgba(0, 0, 0, 1)',
  'inner-4': 'inset 0 0 0 4px rgba(0, 0, 0, 1)',
  'inner-6': 'inset 0 0 0 6px rgba(0, 0, 0, 1)',
  'inner-8': 'inset 0 0 0 8px rgba(0, 0, 0, 1)',
};
