/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          bg: '#F6F0E6',
          paper: '#FDFBF7',
          card: '#FAF6EE',
          border: '#D8C7B0',
          text: '#3D2F24',
          muted: '#7A6B5D',
          red: '#9E2A2B',
          'red-dark': '#802223',
          gold: '#C58940',
          'gold-light': '#E5BA73',
          sepia: '#543D2B'
        }
      },
      fontFamily: {
        serif: ['"Merriweather"', '"Noto Serif"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
