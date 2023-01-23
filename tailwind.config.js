module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./public/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require("flowbite/plugin")],
};
