/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': '#FAFAFA',
        'gray-primary': '#B3B3B3',
      },
    },
  },
  plugins: [],
}
