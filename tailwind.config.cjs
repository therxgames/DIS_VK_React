const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    transform: typewindTransforms,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          normal: '#165ED9',
          normal2: '#2C8EFF',
          light: '#0077FF',
          dark: '#052F60'
        },
        gray: {
          dark: '#052134',
          dark2: '#5A5A5A',
          dark3: '#686868',
          dark4: '#B1B1B1',
          normal: '#787575',
          normal2: '#8A8A8A',
          normal3: '#545353',
          light: '#E7F1F9',
          light2: '#A6A6A6',
          light3: '#F0F0F0',
        },
        pink: {
          normal: '#FB0C68',
          dark: '#CAB4BC',
        },
        red: {
          normal: '#FF003D'
        }
      },
    },
    fontFamily: {
      'default': ['VK Sans Text', 'sans-serif'],
      'condensed': ['VK Sans Display Condensed', 'sans-serif'],
      'expanded': ['VK Sans Display Expanded', 'sans-serif'],
      'text': ['VK Sans Text', 'sans-serif'],
    }
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    {
      pattern: /^grid-cols-[0-9]+$/,
    },
  ],
};
