module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
      autoprefixer: { grid: true },
      browsers: '> 1% in KR',
      stage: 2,
    },
  },
};
