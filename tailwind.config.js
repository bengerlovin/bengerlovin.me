module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,jsx,tsx,ts}', './layouts/**/*.{js,jsx,tsx,ts}', './components/**/*.{js,jsx,tsx,ts}'],
  theme: {
    fontFamily: {
      inter: "'Inter', 'sans-serif'",
      lato: "'Lato', 'sans-serif'",
      sourceSans: "'Source Sans Pro', sans-serif",
      heebo: "'Heebo', sans-serif",
      heading: "'DM Serif Display', 'serif'",
      'body': "'Inter', 'sans-serif'",
    },
    extend: {
      letterSpacing: {
        'tightest': '-0.056em',
        'heading': '-0.045em',
        'tightHeading': '-0.065em'
      },
      boxShadow: {
        'soft': 'rgba(100, 100, 111, 0.075) 0px 7px 29px 0px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
