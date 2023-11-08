/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#5C2DD5',
        'electric-violet': '#7945FF',
        'salmon-pink': '#FD6687',
        'mustard-yellow': '#FFCE67',
      },
      boxShadow: {
        'primary': '0 10px 10px #000',
      }
    }
  },
  plugins: [],
}