/** @type {import('tailwindcss').config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: "23.75em",
      sm: "30em",
      md: "37.5em",
      lg: "56.25em",
      xl: "75em",
      "2xl": "87.5em",
      big: "100em",
    },
    extend: {
      colors: {
        strongCyan: "#0198BD",
        lightBlue: "#66C3FF",
        deepBlue: "#1271B8",
        indigo: "#3B12B8",
        darkGreyishBlue: "#0D4A80",
        greyishBlue: "#3E80B0",
      },
      fontFamily: {
        sans: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
