/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        app: {
          primary: "#2a7761",
          "primary-light": "#62b8a0",
          "accent-light": "#7eeec0",
        },
      },
    },
  },
  plugins: [],
};
