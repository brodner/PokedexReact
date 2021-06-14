const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      emerald:colors.emerald
    },
    fontFamily:{
      body:['Nunito']
    },
    backgroundImage:theme=>({
      bgpokebol:"url('./images/bg_pokeball.png')"
    })
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover']
    },
  },
  plugins: [],
}
