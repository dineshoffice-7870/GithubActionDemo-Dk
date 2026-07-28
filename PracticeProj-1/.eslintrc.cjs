module.exports = {
  env: { 
    browser: true, 
    es2021: true,
    jest: true, // <-- Adds support for describe, it, expect, test, etc.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react'],
  rules: {},
}