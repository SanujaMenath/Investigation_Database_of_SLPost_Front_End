/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,ejs}'],
  theme: {
    extend: {},
  },
  plugins: [  require('tailwindcss-textshadow')],
  darkMode: 'class',
}


