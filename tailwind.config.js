/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1E",
        secondary: "#32E0C4",
        secord: "#EB455F",
        ourwhite: "#F7F7F9",
        ...defaultTheme.colors,
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        bungee: ["Bungee", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        ...defaultTheme.fontFamily,
      },
      screens: {
        xs: "380px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
