/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          100 : '#e2c7bf',
          200: '#C89F94',
          400 :'#b2715d',
          600 :'#884835'
        }
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        slideUp: {from: {opacity: 0}, to: {opacity: 1}}
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        slideUp: 'slideUp .4s ease-in',
      }
    },
  },
  plugins: [],
}
