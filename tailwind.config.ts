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
      animation: {
        'color-change': 'colorChange 2s steps(8) infinite',
      },
      boxShadow: boxShadow,
      aria: {
        invalid: 'invalid="true"',
      },
      keyframes: {
        colorChange: {
          '0%': { fill: '#2c31ff' },
          '12.5%': { fill: '#d4d4d4' },
          '100%': { fill: '#d4d4d4' },
        },
      },
      backgroundImage: {
        'card-1': "url('/images/card-1.png')",
        'card-2': "url('/images/card-2.png')",
        'card-3': "url('/images/card-3.png')",
        'doodle-circle': "url('/images/doodle-circle.svg')",
      },
    },
  },
};
export default config;
