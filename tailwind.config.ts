import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#57423F',
        'main': '#A02E2A',
        'mainL1': '#aa433f',
        'mainL2': '#b35855',
        'mainL3': '#bd6d6a',
        'mainDark': '#820E15',
        'backGround': '#BFA6A2',
        'mainLight': '#FFB6A5',
        'butelkowaZielen': '#396200'
      },
      keyframes: {
        blob: {
          '0%, 100%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
          '25%': {borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'},
          '50%': {borderRadius: '40% 30% 20% 30% / 70% 40% 60% 20%'}
        }
      },
      animation: {
        blob: 'blob 15s ease-in-out infinite'
      }
    },
    fontFamily: {
      'AdventPro': ['Advent Pro'],
      'ProtestRevolution': ['Protest Revolution'],
      'Roboto': ['Roboto']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
