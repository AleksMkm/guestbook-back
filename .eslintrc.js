module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },

  extends: [
    'standard',
    'plugin:json/recommended',
    'plugin:json/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'linebreak-style': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1
    }],
    'brace-style': 'error',
    'object-curly-newline': ['error', { consistent: true }]
  }
}
