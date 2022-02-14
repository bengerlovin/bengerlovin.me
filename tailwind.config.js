module.exports = {
  content: ['./pages/**/*.{js,jsx,tsx,ts}', './layouts/**/*.{js,jsx,tsx,ts}', './components/**/*.{js,jsx,tsx,ts}'],
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      dmserif: "'DM Serif Text', serif",
      league: "'League Spartan', sans-serif",
      lato: "'Lato', sans-serif",
      soehne: "'Soehne', sans-serif",
      heading: "'DM Serif Display', serif",
      'body': ["'Inter'", 'sans-serif'],
    },
    extend: {
      letterSpacing: {
        'tightest': '-0.056em',
        'tightHeading': '-0.065em'
      },
      boxShadow: {
        'soft': 'rgba(100, 100, 111, 0.075) 0px 7px 29px 0px;',
      }
    },
  },
  plugins: [],
}
