module.exports = {
  purge: {
    content: [
      './**/*.ts',
      './**/*.tsx'
    ],
    options: {
      // include any styles used in string concatentations
      safelist: []
    }
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
