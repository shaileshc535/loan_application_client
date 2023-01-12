/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3362CC',
        'primary-dark': '#0051EE',
        'primary-accent': '#49B0FC',
        'primary-light': '#CCE9FF',
        'primary-accent-dark': '#0B4870',
        secondary: '#27221F',
        accent: '#0051EE',
        white: '#FFFFFF',
        dark: '#000000',
        grey: '#F2F2F2',
        'dark-grey': '#A59F9F',
        'light-grey': '#D9D9D9',
        success: '#FFBE55',
        'light-blue': '#CEFFF3',
        bordercolor: '#0C1825',
      },
      fontFamily: {
        dmSans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        yrsa: ['Yrsa', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
