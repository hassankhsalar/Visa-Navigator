/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#051a19',
        background: '#f2fdfd',
        primary: '#3ad1d4',
        secondary: '#96bbe8',
        accent: '#6486dd',
        gradientStart: '#f8d6fb',
        gradientEnd: '#daf7fb',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], // Include light and dark themes
  },
};
