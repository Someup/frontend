import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from './styles/base';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
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
  },
};
export default config;
