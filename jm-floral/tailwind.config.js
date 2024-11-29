module.exports = {
  content: [
    "./dist/*.html",
    "./dist/assets/*.js"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        "primary-brown": {
          DEFAULT: "#87644F",
          400: "#87644F",
          500: "#7A4E3B",
          600: "#6A3F2D",
        },
        "primary-golden-brown": {
          DEFAULT: "#B87E34",
          400: "#B87E34",
          500: "#A6732A",
          600: "#8E5B1F",
        },
        "primary-green-cream": {
          DEFAULT: "#FFEEBD",
          400: "#FFEEBD",
          500: "#D1C380",
          600: "#A8A15D",
        },
      },
    },
  },
  plugins: [],
};
