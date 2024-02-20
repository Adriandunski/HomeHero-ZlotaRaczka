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
        'mainLight': '#FFB6A5'
      },
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
