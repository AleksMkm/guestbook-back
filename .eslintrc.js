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
    'plugin:json/recommended',
    'plugin:react/recommended'
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
    'object-curly-newline': ['error', { consistent: true }],
    'react/prop-types': 0,
    'react/self-closing-comp': ['error', {
      component: true, html: true
    }],
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/display-name': ['off'],
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }]
  }
}
