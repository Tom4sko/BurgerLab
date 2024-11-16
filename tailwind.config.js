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
        'gray-primary': '#374151',
        'gray-secondary': '#6b7280',
        'black-primary': '#161616',
        'orange-primary': '#FFAC1C',
      },
      backgroundImage: {
        'black-gradient': 'linear-gradient(to right, #434343 0%, black 100%)',
      },
      fontFamily: {
        PacificoRegular: 'PacificoRegular',
        AntonRegular: 'AntonRegular',
      },
    },
  },
  plugins: [],
}
