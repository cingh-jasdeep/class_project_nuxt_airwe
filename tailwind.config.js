const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        one: ['Mukta Mahee', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'baby-blue': '#CFE2F3',
        'airwe-blue': '#005197',
      },
    },
  },
  plugins: [],
}
