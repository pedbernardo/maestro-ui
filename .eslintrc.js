module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  ignorePatterns: ['*.html'],
  rules: {}
}
