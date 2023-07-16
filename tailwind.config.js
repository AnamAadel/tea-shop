/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "2rem",
      },
      center: true,
    },
    colors: {
      "inherit": "inherit",
      "orange": {
        300: "#ff4a00",
        200: "#df4b0f",
        100: "#f2b59c",
      },
      "blue": {
        300: "#000b2c",
        200: "#122341",
        100: "#233e6a",
      },
      "white": "#ffffff"
    },
    extend: {
      zIndex: {
        "forword": "1",
        "backword": "-1",
      },
      fontFamily: {
        "commorant": "'Cormorant Garamond', serif"
      }
    },
  },
  plugins: [],
}
