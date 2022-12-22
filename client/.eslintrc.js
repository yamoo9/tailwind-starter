module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'warn',
  },
};
