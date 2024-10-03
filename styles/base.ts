/* eslint-disable @rushstack/typedef-var */
/* eslint-disable @typescript-eslint/naming-convention */
export const color = {
  white: '#ffffff',
  black: '#000000',
  secondary: '#a9ffa9',
  'gray-30': '#f2f2f2',
  'gray-50': '#ededed',
  'gray-100': '#d4d4d4',
  'gray-200': '#bababa',
  'gray-300': '#a1a1a1',
  'gray-400': '#878787',
  'gray-500': '#6e6e6e',
  'gray-600': '#545454',
  'gray-700': '#3b3b3b',
  'gray-800': '#212121',
  'gray-900': '#080808',
  'primary-50': '#c7c8ff',
  'primary-100': '#9496ff',
  'primary-200': '#6165ff',
  'primary-300': '#474cff',
  'primary-400': '#2c31ff',
  'primary-500': '#0006fa',
  'primary-600': '#0005c7',
  'primary-700': '#000494',
  'primary-800': '#000261',
  'primary-900': '#00012e',
  'error-50': '#fcc4c4',
  'error-100': '#fa9393',
  'error-200': '#f86363',
  'error-300': '#f63232',
  'error-400': '#ec0a0a',
  'error-500': '#ba0808',
  'error-600': '#870606',
  'error-700': '#6e0505',
  'error-800': '#540404',
  'error-900': '#3b0303',
  transparent: 'transparent',
};

export const fontSize = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '3rem', // 32px
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
  ...Array.from({ length: 101 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      acc[cur] = `${cur * 4}px`;
      return acc;
    },
    {} as Record<string, string>,
  ), //w-0 ~ w-50
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

export const borderRadius = {
  ...Array.from({ length: 51 }, (_, i) => i / 2).reduce(
    (acc, cur) => {
      acc[cur] = `${cur * 0.25}rem`;
      return acc;
    },
    {} as Record<string, string>,
  ), // rounded-0 ~ rounded-25
  full: '9999px',
};

export const boxShadow = {
  inner: 'inset 0 0 0 1px rgba(0, 0, 0, 1)',
  'inner-2': 'inset 0 0 0 2px rgba(0, 0, 0, 1)',
  'inner-4': 'inset 0 0 0 4px rgba(0, 0, 0, 1)',
  'inner-6': 'inset 0 0 0 6px rgba(0, 0, 0, 1)',
  'inner-8': 'inset 0 0 0 8px rgba(0, 0, 0, 1)',
};
