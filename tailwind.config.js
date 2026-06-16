/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f6f1e7",
        "cream-soft": "#efe7d6",
        forest: "#1f3a2b",
        "forest-deep": "#14241b",
        gold: "#b08740",
        "gold-soft": "#d4ad6a",
        charcoal: "#1b1c18",
        stone: "#8a8275",
        line: "#d8cfbb",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
