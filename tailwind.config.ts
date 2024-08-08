import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkAccent: '#022365',
        lightAccent: '#99BBFF',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: '#1E65F3', foreground: '#FFFFFF' },
            secondary: { DEFAULT: '#F0F5FF', foreground: '#022365' },
          },
        },
      },
    }),
  ],
};
export default config;
