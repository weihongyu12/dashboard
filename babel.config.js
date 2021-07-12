module.exports = {
  presets: [
    ['react-app'],
  ],
  plugins: [
    'babel-plugin-date-fns',
    [
      'babel-plugin-lodash',
      {
        id: [
          'lodash',
          'async-es',
        ],
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
        '@material-ui/icons': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@material-ui/icons/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        [
          'babel-plugin-react-remove-properties',
          {
            properties: [
              'data-testid',
              /data-test$/
            ]
          },
        ],
      ],
    },
  },
};
