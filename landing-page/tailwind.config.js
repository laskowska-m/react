/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#37447E',
        'light-purple': '#505F98',
        'dark-blue': '#111B47',
        'title-gray': '#454E54',
        'txt-gray': '#5D6970',
        'price-color': '#222F65',
        'section-bg': '#E7ECFF',
        'footer-icons': '#B0B8BC',

      },
    },
  },
  plugins: [],
}
