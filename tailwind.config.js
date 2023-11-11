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
        'counter': 'inset 0px 10px 0px 0px rgba(0,0,0,0.75)',
        'counter-filled-large': 'inset 0px 5px 0px 0px rgba(0,0,0,0.5)',
        'counter-filled-small': 'inset 0px 3px 0px 0px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'turn-card-red': "url('./assets/images/turn-background-red.svg')",
        'turn-card-yellow': "url('./assets/images/turn-background-yellow.svg')",
        'marker-red': "url('./assets/images/marker-red.svg')",
        'marker-yellow': "url('./assets/images/marker-yellow.svg')",
      }
    }
  },
  plugins: [],
}