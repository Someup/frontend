import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from './styles/base';

const isStorybook: boolean = process.env.MODE === 'storybook';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    ...(isStorybook ? ['./stories/**/*.{js,ts,jsx,tsx,mdx}'] : []),
  ],
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
  theme: {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    spacing,
    borderRadius,
    fontFamily: {
      sans: ['Pretendard Variable', ...defaultTheme.fontFamily.sans],
    },
    colors: color,
    extend: {
      boxShadow: boxShadow,
      aria: {
        invalid: 'invalid="true"',
      },
    },
  },
};
export default config;
