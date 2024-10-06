import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-[40px]',
    'text-[45px]',
    'text-[55px]',
    'text-[60px]',
    'text-[70px]',
    'md:text-[60px]',
    'md:text-[80px]',
    'md:text-[90px]',
    'md:text-[100px]',
    'to-red-500',
    'to-green-500',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        bebasNeue: ["var(--font-bebasNeue)"],
      },
    },
  },
  plugins: [],
};

export default config;
