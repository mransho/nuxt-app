/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  screens: {
    md: "768px",
  },

  theme: {
    extend: {
      colors: {
        primaryXX: "#9c27b0",
        secondaryXX: {
          100: "red",
          200: "#5907e9",
        },
      },
      fontFamily: {
        bodyFont: ["Doto"],
      },
    },
  },
  plugins: [],
};
