module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    daisyui: {
      themes: ['light', 'dark']
    },
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
