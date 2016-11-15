const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
  rules: {
    'no-undef': 2,
    'no-unused-vars': [2, { varsIgnorePattern: 'log', args: 'none' }],
    'arrow-parens': [2, "always", { "requireForBlockBody": true }],
    'arrow-body-style': 0,
    'object-curly-spacing': 0,

    'react/jsx-no-bind': 0,
    'react/jsx-boolean-value': 0,
    'react/no-deprecated': 0,

    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'cfg', 'webpack.config.dev.js'),
      },
    },
  },
}
