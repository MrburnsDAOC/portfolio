/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: "ui-monospace",
        sans: "Helvetica, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
