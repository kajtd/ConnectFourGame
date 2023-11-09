/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontSize: {
      'l': '56px',
      'm': '24px',
      's': '20px',
      'xs': '16px',
    }, 
    extend: {
      colors: {
        'royal-purple': '#5C2DD5',
        'electric-violet': '#7945FF',
        'salmon-pink': '#FD6687',
        'mustard-yellow': '#FFCE67',
      },
      boxShadow: {
        'primary': '0 10px 10px #000',
      },
      backgroundImage: {
        'turn-card-red': "url('./assets/images/turn-background-red.svg')",
        'turn-card-yellow': "url('./assets/images/turn-background-yellow.svg')",
      }
    }
  },
  plugins: [],
}