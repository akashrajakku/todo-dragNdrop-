/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundColor" : '#0D1117',
        "boxBackground": '#161C22'
      }
    },
  },
  plugins: [],
}

