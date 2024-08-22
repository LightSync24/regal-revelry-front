/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
        headerFont: ["Libre Caslon Text", "serif"],
      },
      colors: {
        hazel: "#C15627",
        leaf: "#1A4122",
        beige: "#E9E4E0",
      },
    },
  },
  plugins: [],
};
