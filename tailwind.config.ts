import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import {
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
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
    fontFamily: {
      sans: ['Pretendard Variable', ...defaultTheme.fontFamily.sans],
    },
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    colors: color,
  },
};
export default config;
