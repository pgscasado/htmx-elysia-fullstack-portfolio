/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/components/*.tsx', './src/pages/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
      }
    },
  },
  plugins: [],
};