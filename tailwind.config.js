/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["MPlantin", "Merriweather", "serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

