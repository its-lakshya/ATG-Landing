/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs' : "440px",
      'xs' : "525px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

