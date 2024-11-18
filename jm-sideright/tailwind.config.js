module.exports = {
  content: [
    "./dist/*.html",
    "./dist/assets/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-golden-brown": {
          DEFAULT: "#D89959",
          400: "#D89959",
          500: "#D6A157",
          600: "#B88849",
        },
        "primary-green-tosca": {
          DEFAULT: "#1ABC9C",
          400: "#1ABC9C",
          500: "#17A890",
          600: "#149B84",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
