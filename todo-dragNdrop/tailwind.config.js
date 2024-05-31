/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundColor": '#0D1117',
        "boxBackgroundColor": '#161C22'
      }
    },
  },
  plugins: [],
}

