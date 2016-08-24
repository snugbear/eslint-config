module.exports = {
  extends: ['standard-react'],
  env: {
    es6: true,
    browser: true
  },
  globals: {
    __WEBPACK__: false,
    __DEVTOOLS__: false,
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [2, { 'ignore': ['css'] }],
    'jsx-quotes': [2, 'prefer-double']
  }
}
