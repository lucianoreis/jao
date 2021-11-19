module.exports = {
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff !important',
      'blue-10':'#ECF7FB',
      'blue-20':'#E0EFF6',
      'blue-50':'#64B5CE', 
      'blue-60':'#318FAC',
      'blue-70':'#00465F',
      'blue-80':'#002A3A',
      'green-10':'#DEF8E8',
      'green-20':'#5DB883',
      'green-70':'#44A06A',
      'green-80':'#286943',
      'yellow-10':'#FDF3E3',
      'yellow-20':'#EDAB3E',
      'yellow-70':'#B87305',
      'yellow-80':'#834C0D',
      'red-10':'#FCEBEB',
      'red-20':'#D65C5A',
      'red-70':'#AA3937',
      'red-80':'#832F2E',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
