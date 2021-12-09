module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{vue}', './src/components/**/*.{vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
