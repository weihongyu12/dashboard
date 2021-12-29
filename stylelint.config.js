// stylelint.config.js

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap',
  ],
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  ignoreFiles: [
    '**/*.d.ts',
  ],
};
