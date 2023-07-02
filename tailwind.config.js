/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        linear: 'cubic-bezier(0.5, 0.5, 0.5, 0.5)',
      },
      colors: {
        base: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        primary: {
          base: '#E6B128',
          50: '#F9EDCC',
          100: '#F7E6BA',
          200: '#F3D996',
          300: '#EFCC71',
          400: '#EABE4D',
          500: '#E6B128',
          600: '#C09016',
          700: '#8D6B10',
          800: '#5B450B',
          900: '#291F05',
          950: '#100C02',
        },
        toast: {
          success: '#07bc0c',
          error: '#e74c3c',
          warning: '#f1c40f',
          info: '#3498db',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
