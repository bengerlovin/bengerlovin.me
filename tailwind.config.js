module.exports = {
  content: ['./pages/**/*.{js,jsx,tsx,ts}', './layouts/**/*.{js,jsx,tsx,ts}', './components/**/*.{js,jsx,tsx,ts}'],
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
      dmserif: "'DM Serif Text', serif",
      heading: "'DM Serif Display', serif",
      'body': ["'Inter'", 'sans-serif'],
    },
    extend: {
      letterSpacing: {
        'tightest': '-0.056em',
        'tightHeading': '-0.065em'
      },
    },
  },
  plugins: [],
}
