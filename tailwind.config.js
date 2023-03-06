module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    daisyui: {
      themes: ['light', 'dark']
    },
    container: {
      center: true
    },
    extend: {
      screens: { xs: { max: '640px' } }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
