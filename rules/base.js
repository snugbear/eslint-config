module.exports = {
  extends: ['standard'],
  env: {
    es6: true,
    mocha: true,
    node: true,
    browser: true
  },
  globals: {
    expect: false,
    sinon: false
  },
  plugins: ['standard'],
  rules: {
    'curly': ['error', 'multi-line'],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 0,
    'semi': ['error', 'never'],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': ['off']
  }
}
