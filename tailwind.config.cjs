/** @type {import('tailwindcss').Config} */

const roseSchema = {
  600: 'rgb(225, 5, 74)',
}

const redSchema = {
  600: 'rgb(225, 85, 76)',
}

const graySchema = {
  50: '#F9F9F9',
  300: '#CACACA'
}

module.exports = {
  content: [
    "./src/presentation/components/**/*.tsx",
    "./src/presentation/pages/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          default: '#0E0B13',
          gray: graySchema,
          red: redSchema,
          rose: roseSchema,
        },

        gray: graySchema,
        red: redSchema,
        rose: roseSchema,
      }
    },
  },
  plugins: [],
}
