/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("kutty"),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}
