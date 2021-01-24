module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    // es2021: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'max-len': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warning',
  },
};
