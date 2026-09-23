/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bn-black': '#000000',
        'bn-white': '#FFFFFF',
        'bn-light-gray': '#E7E7E7',
        'bn-taupe': '#C9C1B8',
        'bn-charcoal': '#2D2D2D',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'widest2': '0.25em',
      },
    },
  },
  plugins: [],
}