// .eslintrc.js

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'mui-unused-classes',
  ],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'mui-unused-classes/unused-classes': 'error',
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        'react/prop-types': 'off',
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/src/*.{spec,test}.{j,t}s?(x)',
        '**/tests/unit/**/*.{spec,test}.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      },
    },
  },
};
