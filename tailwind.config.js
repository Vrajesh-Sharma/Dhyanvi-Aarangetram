/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        maroon: {
          800: '#800000', // Deep Crimson
          900: '#4a0404', // Darker for text
        },
        gold: {
          400: '#D4AF37', // Classic Gold
          500: '#C5A028',
        },
        cream: '#FDFBF7', // Parchment background
      }
    },
  },
  plugins: [],
}