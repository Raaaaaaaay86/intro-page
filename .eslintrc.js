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
    'max-len': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 1,
  },
};
