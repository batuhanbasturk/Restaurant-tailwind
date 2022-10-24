/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#553939",
        secondary: {
          100: "#F1EFDC",
          200: "#A77979",
          300: "#472D2D",
        },
      },
      fontFamily: {
        body: ["Alkalami"],
      },
    },
  },
  plugins: [],
};
