import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'navy-950': '#070B17',
        'navy-900': '#0B1226',
        'navy-800': '#111A33',
        'navy-700': '#1A2547',
        'gold-300': '#F0D58A',
        'gold-400': '#E3B94F',
        'gold-500': '#D4A437',
        'gold-600': '#B8862B',
        cream: '#F6F5F1',
        ink: '#0F172A',
        muted: '#64748B',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 14px 40px rgba(212, 164, 55, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0D58A 0%, #D4A437 50%, #B8862B 100%)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
