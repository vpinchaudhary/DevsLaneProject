module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4361EE',
        heading: {
          100: '#888ea8',
          200: '#3b3f5c',
          300: '#212559',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
