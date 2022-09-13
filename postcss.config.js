module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    require('tailwind-scrollbar-hide')
  },
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    }
  
}
