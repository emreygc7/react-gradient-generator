/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bilbo': ['Bilbo Swash Caps', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
